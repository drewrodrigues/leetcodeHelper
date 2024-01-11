import { log } from "./logger";

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
  const result = await chrome.storage.sync.get([key]);
  const keyedResult = result[key];
  log("getStorageValue", { key, result: keyedResult });
  return keyedResult;
}

export async function setStorageValue(key, value) {
  if (!Object.keys(STORAGE_KEYS).includes(key)) {
    throw new Error(`Invalid storage key ${key}`);
  }
  return await chrome.storage.sync.set({ [key]: value });
}
