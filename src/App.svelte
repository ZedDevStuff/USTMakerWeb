<script lang="ts">
	import "./app.css";
	import { favicon } from "$lib/static";
	import { fs } from "$lib/fs";
	import { CustomUST } from "$lib/CustomUST.svelte";
	import JSZip from "jszip";

	import * as Accordion from "$lib/components/ui/accordion";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import * as Menubar from "$lib/components/ui/menubar";
	import { Textarea } from "$lib/components/ui/textarea";
	import { SvelteMap } from "svelte/reactivity";

	let workDir: FileSystemDirectoryHandle | null = $state(null);
	let currentUST: CustomUST | null = $state(null);
	let soundBank: File[] = $state([]);

	let showUSTDialog: boolean = $state(false);
	let newUSTName: string = $state("");
	let newUSTIcon: string = $state("");
	let newUSTAuthor: string = $state("");
	let newUSTDescription: string = $state("");
	let iconPreview: HTMLImageElement;
	let currentUSTIcon: string = $state("");

	(window as any).soundBank = soundBank;

	function newUst() {
		soundBank = [];
		newUSTName = "";
		newUSTIcon = favicon;
		newUSTAuthor = "";
		newUSTDescription = "";
		showUSTDialog = true;
	}
	function confirmNewUst() {
		currentUST = CustomUST.getTemplate();
		currentUST.Name = newUSTName;
		currentUSTIcon = newUSTIcon;
		currentUST.Author = newUSTAuthor;
		currentUST.Description = newUSTDescription;
		document.title = currentUST.Name + " by " + currentUST.Author + " - USTMakerWeb";
		showUSTDialog = false;
	}
	async function chooseIcon() {
		let files;
		try {
			// @ts-ignore
			files = await window.showOpenFilePicker({
				multiple: false, 
				types: [
					{
						description: "Image Files",
						accept: {
							"image/*": [".png", ".jpg", ".jpeg"],
						},
					},
				],
			});
			let file = files[0];
			let blob = await file.getFile();
			let reader = new FileReader();
			reader.onload = () => {
				newUSTIcon = reader.result as string;
				iconPreview.src = newUSTIcon;
			};
			reader.readAsDataURL(blob);
		} catch(e) {
			console.error(e);
		}
	}
	async function openUst() {
		let picked: FileSystemDirectoryHandle;
		try {
			soundBank = [];
			currentUST = null;
			// @ts-ignore
			picked = await window.showDirectoryPicker();
			let entries = await fs.getFilesInDir(picked);
			let ust = entries.filter((entry) => entry.name.endsWith(".ust") || entry.name.endsWith(".ust.json"))[0];
			if(ust) {
				let file = await ust.getFile();
				let contents = await file.text();
				let soundFiles = await fs.getAllFilesInDir(picked, ["wav", "mp3", "ogg"], true);
				currentUST = CustomUST.fromJson(contents);
				if(currentUST) {
					for(let level of currentUST.levels) {
						for(let entry of level[1]) {
							let song = entry[1];
							if(song) {
								let found = soundFiles.find((file) => file.name.toLocaleLowerCase() === song.split("/").pop()?.toLocaleLowerCase());
								if(found) {
									if(!soundBank.find((file) => file.name.toLocaleLowerCase() === song.toLocaleLowerCase())) {
										let file = await found.getFile();
										soundBank.push(file);
									}
									currentUST?.levels.get(level[0])?.set(entry[0], `<soundBank>/${song}`);
								}
							}
						}
					}
					let icon = entries.filter((entry) => entry.name == "icon.png")[0];
					if(icon) {
						let file = await icon.getFile();
						let blob = await file.arrayBuffer();
						let reader = new FileReader();
						reader.onload = () => {
							currentUSTIcon = reader.result as string;
						};
						reader.readAsDataURL(new Blob([blob], {type: "image/png"}));
					}
					document.title = currentUST.Name + " by " + currentUST.Author + " - USTMakerWeb";
					console.log("Loaded UST file", currentUST);
				} else {
					alert("Failed to load UST file");
				}
			} else {
				alert("No UST file found in directory");
			}
		} catch(e) {
			console.error(e);
		}
	}
	async function saveUst() {
		if(currentUST) {
			let json = JSON.stringify(currentUST, replacer, 2);
			json = json.replace(/<soundBank>\//g, "audio/");
			let file = new Blob([json], {type: "application/json"});
			try {
				// @ts-ignore
				let handle = await window.showSaveFilePicker({
					suggestedName: currentUST.Name + ".ust",
					types: [
						{
							description: "UST File",
							accept: {
								"*/*": [".ust.json", ".ust"],
							},
						},
					],
				});
				let writable = await handle.createWritable();
				await writable.write(file);
				await writable.close();
				alert("Saved UST file to " + handle.name);
			} catch(e) {
				console.error(e);
			}
		}
	
	}
	async function exportUst() {
		let zip = new JSZip();
		let ust = CustomUST.fromJson(JSON.stringify(currentUST, replacer, 2));
		let audioFolder = zip.folder("audio");
		for(let level of ust!.levels) {
			for(let entry of level[1]) {
				let song = entry[1];
				if(song) {
					let found = soundBank.find((file) => file.name === song.split("/").pop());
					if(found) {
						audioFolder!.file(found.name, found);
					}
				}
			}
		}
		zip.file("soundtrack.ust", JSON.stringify(ust, replacer, 2).replace(/<soundBank>\//g, "audio/"));
		let icon = currentUSTIcon.split(",")[1];
		zip.file("icon.png", icon, {base64: true});
		let blob = await zip.generateAsync({type: "blob"});
		// @ts-ignore
		let handle = await window.showSaveFilePicker({
			suggestedName: ust!.Name + ".zip",
			types: [
				{
					description: "Zip File",
					accept: {
						"*/*": [".zip"],
					},
				},
			],
		});
		let writable = await handle.createWritable();
		await writable.write(blob);
		await writable.close();
		alert("Exported UST as zip to " + handle.name);
	}
	function addLevel() {
		if(currentUST) {
			currentUST.levels.set("New Level", new SvelteMap<string, string>());
			currentUST.levels = currentUST.levels;
		}
	}
	function updateLevelName(oldLevel: string, newLevel: string) {
		if(currentUST) {
			let map = currentUST.levels.get(oldLevel);
			if(map) {
				let entries = Array.from(currentUST.levels);
				currentUST.levels.clear();
				for(let [k, v] of entries) {
					if(k === oldLevel) {
						currentUST.levels.set(newLevel, map);
					} else {
						currentUST.levels.set(k, v);
					}
				}
			}
		}
	}
	function removeLevel(level: string) {
		if(currentUST) {
			currentUST.levels.delete(level);
		}
	}
	function addEntry(level: string) {
		if(currentUST) {
			let map = currentUST.levels.get(level);
			if(map) {
				if(map.has("New Entry")) {
					let i = 1;
					while(map.has("New Entry " + i)) {
						i++;
					}
					map.set("New Entry " + i, "");
				} else {
					map.set("New Entry", "");
				}
			}
		}
	}
	function updateEntryName(level: string, oldEntry: string, newEntry: string) {
		if(currentUST) {
			let map = currentUST.levels.get(level);
			if(map) {
				let value = map.get(oldEntry);
				if(value) {
					let newMap = new SvelteMap<string, string>();
					for(let [k, v] of map) {
						if(k === oldEntry) {
							newMap.set(newEntry, value);
						} else {
							newMap.set(k, v);
						}
					}
					currentUST.levels.set(level, newMap);

				}
			}
		}
	}
	function removeEntry(level: string, entry: string) {
		if(currentUST) {
			currentUST.levels.get(level)?.delete(entry);
		}
	}
	function updateEntryValue(level: string, entry: string, value: string) {
		if(currentUST) {
			currentUST.levels.get(level)?.set(entry, value);
		}
	}

	async function addAudioFile() {
		let files;
		try {
			// @ts-ignore
			files = await window.showOpenFilePicker({
				multiple: true, 
				types: [
					{
						description: "Audio Files",
						accept: {
							"audio/*": [".wav", ".mp3", ".ogg"],
						},
					},
				],
			});
			for(let file of files) {
				soundBank.push(await file.getFile());
			}
		} catch(e) {
			console.error(e);
		}
	}
	async function addAudioFor(audioName: string, level: string, entry: string) {
		let audio = soundBank.find((file) => file.name === audioName);
		if(audio) {
			soundBank
		}
	}
	function replacer(key: any, value: any) {
		if(value instanceof Map) {
			let obj: any = {};
			value.forEach((v, k) => {
				obj[k] = v;
			});
			return obj;
		} else {
			return value;
		}
	}

	let menuDiv: HTMLDivElement;
</script>

<main class="w-screen h-screen flex flex-col">
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>File</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item onclick={newUst}>New</Menubar.Item>
				<Menubar.Item onclick={openUst}>Open</Menubar.Item>
				<Menubar.Item onclick={saveUst}>Save</Menubar.Item>
				<Menubar.Item onclick={exportUst}>Export ZIP</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>

	<!-- The page -->

	<div class="size-full flex flex-row max-h-[calc(100%-2.5rem)]">
		<!-- New UST Dialog -->
		<Dialog.Root bind:open={showUSTDialog}>
			<Dialog.Content class="w-1/2">
				<Dialog.Header>
					<Dialog.Title>New UST</Dialog.Title>
				</Dialog.Header>
				
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="icon" class="text-right">Icon</Label>
						<span class="col-span-3 flex flex-row">
							<img class="size-10" bind:this={iconPreview} src={favicon}>
							<Button id="icon" class="col-span-3 flex-1" onclick={chooseIcon}>Choose icon</Button>
						</span>
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="name" class="text-right">UST Name</Label>
						<Input id="name" class="col-span-3" bind:value={newUSTName} />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="author" class="text-right">Author</Label>
						<Input id="author" class="col-span-3" bind:value={newUSTAuthor} />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="desc" class="text-right">Description</Label>
						<Textarea id="desc" class="col-span-3" bind:value={newUSTDescription} />
					</div>
				</div>

				<Dialog.Footer>
					<Button type="submit" onclick={confirmNewUst}>Complete</Button>
				  </Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
		<!-- UST editor -->
		<div class="flex-1 py-4 pl-4 pr-2">
			<Card.Root class="h-full overflow-y-scroll">
				<Card.Header>
					<Card.Title>UST</Card.Title>
				</Card.Header>

				<Card.Content>
					{#if currentUST !== null}
						<div class="w-full flex flex-col gap-2">
							{#each currentUST.levels as entry}
							<div class="flex flex-col items-end flex-1">
								<span class="flex flex-row w-full">
									<Input class="flex-1" value={entry[0]} oninput={(e) => updateLevelName(entry[0], (e.target as HTMLInputElement).value)} />
									<Button variant="destructive" onclick={() => removeLevel(entry[0])}>x</Button>
								</span>
								<div class="w-[calc(100%-2.5rem)] flex flex-col gap-2 mt-2">
									{#each entry[1] as subentry}
									<div class="flex flex-row gap-2">
										<Input class="flex-1" value={subentry[0]} oninput={(e) => updateEntryName(entry[0], subentry[0], (e.target as HTMLInputElement).value)} />
										<Input class="flex-1" value={subentry[1]} oninput={(e) => updateEntryValue(entry[0], subentry[0], (e.target as HTMLInputElement).value)} />
										<Button variant="destructive" onclick={() => removeEntry(entry[0], subentry[0])}>x</Button>
									</div>
									{/each}
									<Button onclick={() => addEntry(entry[0])}>Add entry</Button>
								</div>
							</div>
							{/each}
							<Button onclick={addLevel}>Add level</Button>
						</div>
					{/if}
				</Card.Content>
			</Card.Root>
		</div>

		<!-- Sound Bank -->
		
		<div class="flex-1 py-4 pl-2 pr-4">
			<Card.Root class="h-full overflow-y-scroll">
				<Card.Header>
					<Card.Title>Soundbank</Card.Title>
				</Card.Header>

				<Card.Content class="flex flex-col gap-2">
					{#each soundBank as file}
					<div class="w-full flex flex-row bg-[#f1f3f4] items-center gap-2 justify-between">
						<p class="text-center">{file.name}</p>
						<audio controls>
							<source title={file.name} src={URL.createObjectURL(file)} type={file.type} />
						</audio>
						<!-- Copy file name to clipboard -->
						<Button onclick={(e) => {
							navigator.clipboard.writeText(`<soundBank>/${file.name}`)
							if(e.target != null) {
								(e.target as HTMLButtonElement).textContent = "Copied!";
								setTimeout(() => {
									(e.target as HTMLButtonElement).textContent = "Copy entry";
								}, 1000);
							}
						}
						}>Copy entry</Button>
					</div>
					{/each}
					<Button onclick={addAudioFile}>Add audio file</Button>	
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</main>
