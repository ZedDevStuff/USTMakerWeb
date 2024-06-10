export const fs = {
	async getFiles(dir: FileSystemDirectoryHandle): Promise<FileSystemFileHandle[]> {
		const files: FileSystemFileHandle[] = []
		const entries = dir.entries()
		for await (const entry of entries) {
			if (entry[1].kind === 'file') {
				files.push(entry[1] as FileSystemFileHandle)
			}
		}
		return files
	},
	async getFile(dir: FileSystemDirectoryHandle, path: string): Promise<FileSystemFileHandle | null> {
		let parts = path.split('/');
		let file = null;
		let currentDir = dir;
		for (let i = 0; i < parts.length; i++) {
			try {
				currentDir = await currentDir.getDirectoryHandle(parts[i], { create: false });
				if (i === parts.length - 1) {
					try {
						file = await currentDir.getFileHandle(parts[i], { create: false });
						return file;
					} catch (e) {
						console.error(e);
						return null;
					}
				}
			} catch (e) {
				console.error(e);
				return null;
			}
		}
		return null;
	},
	async getDir(dir: FileSystemDirectoryHandle, path: string): Promise<FileSystemDirectoryHandle | null> {
		let parts = path.split('/');
		let currentDir = dir;
		for (let i = 0; i < parts.length; i++) {
			try {
				currentDir = await currentDir.getDirectoryHandle(parts[i], { create: false });
			} catch (e) {
				console.error(e);
				return null;
			}
		}
		return currentDir;
	}
}