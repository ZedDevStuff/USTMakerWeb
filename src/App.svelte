<script lang="ts">
	import { 
		fluentButton,
		fluentMenu,
		fluentMenuItem,
		fluentTreeView,
		fluentTreeItem,
		provideFluentDesignSystem,
		fluentTextField,
		fillColor,
		SwatchRGB,
		accentBaseColor,
		accentPalette,
		accentFillActive,
		PaletteRGB,
		heightNumber,
		baseHeightMultiplier,

	 } from '@fluentui/web-components';
	import { fs } from './lib/fs';
	import { CustomUST } from './lib/CustomUST';
	import { afterUpdate, onMount } from 'svelte';
	import Scaled from './lib/Scaled.svelte';
	import JSZip from 'jszip';
	provideFluentDesignSystem().register(
		fluentButton(),
		fluentMenu(),
		fluentMenuItem(),
		fluentTextField(),
		fluentTreeView(),
		fluentTreeItem(),
	);
	let workDir: FileSystemDirectoryHandle | null = null;
	let currentUST: CustomUST | null = null;
	let soundBank: File[] = [];

	let showUSTDialog: boolean = false;
	let newUSTName: string = "";
	let newUSTAuthor: string = "";
	let newUSTDescription: string = "";

	(window as any).soundBank = soundBank;

	function newUst() {
		soundBank = [];
		newUSTName = "";
		newUSTAuthor = "";
		newUSTDescription = "";
		showUSTDialog = true;
	}
	async function openUst() {
		let picked: FileSystemDirectoryHandle;
		try {
			soundBank = [];
			currentUST = null;
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
					currentUST = currentUST;
					soundBank = soundBank;
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
		let blob = await zip.generateAsync({type: "blob"});
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
	afterUpdate(() => {
		let buttons = document.querySelectorAll("fluent-button.danger");
		let red = SwatchRGB.create(255, 255, 255);
		buttons.forEach((button) => {
			let p = PaletteRGB.create(1, 0.1960784314, 0.1960784314);
			accentPalette.setValueFor(button as HTMLElement, p);
		});
		let desc = document.getElementById("desc");
		if(desc) {
			baseHeightMultiplier.setValueFor(desc as HTMLElement, 80);
			console.log(baseHeightMultiplier.getValueFor(desc as HTMLElement));
		}
		let newLevelButton = document.getElementById("newLevelButton");
	});
	function addLevel() {
		if(currentUST) {
			currentUST.levels.set("New Level", new Map());
			currentUST = currentUST;
		}
	}
	function updateLevelName(oldLevel: string, newLevel: string) {
		if(currentUST) {
			let map = currentUST.levels.get(oldLevel);
			if(map) {
				let newMap = new Map();
				for(let [k, v] of currentUST.levels) {
					if(k === oldLevel) {
						newMap.set(newLevel, map);
					} else {
						newMap.set(k, v);
					}
				}
				currentUST.levels = newMap;
				currentUST = currentUST;
			}
		}
	}
	function removeLevel(level: string) {
		if(currentUST) {
			currentUST.levels.delete(level);
			currentUST = currentUST;
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
				currentUST = currentUST;
			}
		}
	}
	function updateEntryName(level: string, oldEntry: string, newEntry: string) {
		if(currentUST) {
			let map = currentUST.levels.get(level);
			if(map) {
				let value = map.get(oldEntry);
				if(value) {
					let newMap = new Map();
					for(let [k, v] of map) {
						if(k === oldEntry) {
							newMap.set(newEntry, value);
						} else {
							newMap.set(k, v);
						}
					}
					currentUST.levels.set(level, newMap);
					currentUST = currentUST;
				}
			}
		}
	}
	function removeEntry(level: string, entry: string) {
		console.log(level, entry);
		if(currentUST) {
			currentUST.levels.get(level)?.delete(entry);
			currentUST = currentUST;
		}
	}
	function updateEntryValue(level: string, entry: string, value: string) {
		if(currentUST) {
			let map = currentUST.levels.get(level);
			if(map) {
				map.set(entry, value);
				currentUST = currentUST;
			}
		}
	}

	async function addAudioFile() {
		let files;
		try {
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
			soundBank = soundBank;
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

<div class="w-screen h-screen flex flex-row items-center justify-center overflow-hidden">
	<Scaled ratio={16/9} backingResolution={{width: 1600, height: 827}} scale={1} bind:menuDiv={menuDiv}>
		<div id="menubar" class="flex flex-row">
			<!-- New, Open, Save, Export, Export as Zip -->
			<fluent-button class="flex-1" role="none" on:click={newUst}>New UST</fluent-button>
			<fluent-button class="flex-1" role="none" on:click={openUst}>Open UST</fluent-button>
			<fluent-button class="flex-1" role="none" on:click={saveUst}>Save UST file</fluent-button>
			<fluent-button class="flex-1" role="none" on:click={exportUst}>Export UST as zip</fluent-button>
		</div>
		<div class="flex flex-row">
			<div id="ust-tree" class="flex-1 overflow-scroll">
				{#if currentUST !== null}
					<fluent-tree-view class="w-full h-auto">
						Root
						{#each currentUST.levels as level}
							<fluent-tree-item expanded={true}>
								<fluent-text-field class="w-[43.25rem]" value={level[0]} on:change={(e) => updateLevelName(level[0], e.target.value)}></fluent-text-field>
								<fluent-button class="danger" role="none" appearance="accent" on:click={() => removeLevel(level[0])}>-</fluent-button>
								{#each level[1] as entry}
									<fluent-tree-item expanded={true} class="w-full">
										<fluent-text-field class="w-64" value={entry[0]} on:change={(e) => updateEntryName(level[0], entry[0], e.target.value)}></fluent-text-field>
										<fluent-text-field class="w-96" value={entry[1]} on:change={(e) => updateEntryValue(level[0], entry[0], e.target.value)}></fluent-text-field>
										<fluent-button role="none" appearance="accent" on:click={() => null}>*</fluent-button>
										<fluent-button class="danger" role="none" appearance="accent" on:click={() => removeEntry(level[0], entry[0])}>-</fluent-button>
									</fluent-tree-item>
								{/each}
								<fluent-tree-item expanded={true}>
									<fluent-button class="w-[44rem]" role="none" appearance="accent" on:click={() => addEntry(level[0])}>+</fluent-button>
								</fluent-tree-item>
							</fluent-tree-item>
						{/each}
						<fluent-button role="none" appearance="accent" on:click={addLevel}>+</fluent-button>
					</fluent-tree-view>
				{/if}
			</div>
			<div id="sound-bank" class="flex-1 h-[calc(100vh-1.25rem)] p-4 overflow-scroll">
				{#each soundBank as file}
					<div class="w-full flex flex-row bg-[#f7f7f7] items-center gap-2 px-2">
						<p>{file.name}</p>
						<audio controls>
							<source title={file.name} src={URL.createObjectURL(file)} type={file.type} />
						</audio>
						<!-- Copy file name to clipboard -->
						<fluent-button role="none" appearance="accent" on:click={() => navigator.clipboard.writeText(`<soundBank>/${file.name}`)}>Copy entry</fluent-button>
					</div>
				{/each}
				<fluent-button role="none" appearance="accent" on:click={addAudioFile}>Add audio file</fluent-button>	
			</div>
		</div>
	</Scaled>
	{#if showUSTDialog}
		<div class="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div class="w-[50rem] h-[30rem] bg-white rounded-lg p-4 flex flex-col">
				<fluent-text-field on:change={(e) => newUSTName = e.target.value} placeholder="UST Name" value={newUSTName}></fluent-text-field>
				<fluent-text-field on:change={(e) => newUSTAuthor = e.target.value} placeholder="Author" value={newUSTAuthor}></fluent-text-field>
				<fluent-text-field id="desc" on:change={(e) => newUSTDescription = e.target.value} placeholder="Description" value={newUSTDescription} class="h-[20rem]"></fluent-text-field>
				<div class="flex flex-row">
					<fluent-button class="flex-1 danger" role="none" appearance="accent" on:click={() => showUSTDialog = false}>Cancel</fluent-button>
					<fluent-button class="flex-1" role="none" appearance="accent" on:click={() => {
						currentUST = CustomUST.getTemplate();
						currentUST.Name = newUSTName;
						currentUST.Author = newUSTAuthor;
						currentUST.Description = newUSTDescription;
						document.title = currentUST.Name + " by " + currentUST.Author + " - USTMakerWeb";
						showUSTDialog = false;
					}}>Okay</fluent-button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	#ust-tree {
		height: calc(100vh - 32px);
	}
</style>


