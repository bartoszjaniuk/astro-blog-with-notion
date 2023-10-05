import type { StorageKeys } from "./enums/storageKeys.enum";

class Storage {
	getItem(key: StorageKeys) {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : item;
		} catch (_) {
			return;
		}
	}

	setItem(key: StorageKeys, value: unknown) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (_) {
			return;
		}
	}

	removeItem(key: StorageKeys) {
		try {
			localStorage.removeItem(key);
		} catch (_) {
			return;
		}
	}
}

export const storage = new Storage();
