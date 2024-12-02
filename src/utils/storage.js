import config from "./config";

class Storage {
  constructor(prefix = config.storagePrefix) {
    this.prefix = prefix;
  }

  _getKey(key) {
    return `${this.prefix}_${key}`;
  }

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(this._getKey(key));
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading ${key} from storage:`, error);
      return defaultValue;
    }
  }

  set(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(this._getKey(key), serializedValue);
      return true;
    } catch (error) {
      console.error(`Error saving ${key} to storage:`, error);
      return false;
    }
  }

  remove(key) {
    try {
      localStorage.removeItem(this._getKey(key));
      return true;
    } catch (error) {
      console.error(`Error removing ${key} from storage:`, error);
      return false;
    }
  }

  clear() {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.error("Error clearing storage:", error);
      return false;
    }
  }

  has(key) {
    return localStorage.getItem(this._getKey(key)) !== null;
  }

  getPrefix() {
    return this.prefix;
  }

  setPrefix(prefix) {
    this.prefix = prefix;
  }
}

const storage = new Storage(config.storagePrefix);

export default storage;
