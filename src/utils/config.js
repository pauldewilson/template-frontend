const config = {
  isDevelopment: import.meta.env.VITE_ENV === "development",
  isStaging: import.meta.env.VITE_ENV === "staging",
  isProduction: import.meta.env.VITE_ENV === "production",
  isDocker: import.meta.env.VITE_IS_DOCKER === "true",
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,
  storagePrefix: import.meta.env.VITE_APP_STORAGE_PREFIX,
};

export default config;
