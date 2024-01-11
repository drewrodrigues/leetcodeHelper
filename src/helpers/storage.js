export const STORAGE_KEYS = {
  HIDE_DIFFICULTY: "HIDE_DIFFICULTY",
  DISABLE_SYNTAX_HIGHLIGHTING: "DISABLE_SYNTAX_HIGHLIGHTING",
  DISABLE_SYNTAX_ERRORS: "DISABLE_SYNTAX_ERRORS",
  DISABLE_EXAMPLES: "DISABLE_EXAMPLES",
};

export async function getStorageValue(key) {
  if (!Object.keys(STORAGE_KEYS).includes(key)) {
    throw new Error(`Invalid storage key ${key}`);
  }
  return await chrome.storage.sync.get([key]);
}

export async function setStorageValue(key, value) {
  if (!Object.keys(STORAGE_KEYS).includes(key)) {
    throw new Error(`Invalid storage key ${key}`);
  }
  return await chrome.storage.sync.set({ [key]: value });
}
