const config = {
  env: import.meta.env.VITE_ENV,
  isDevelopment: import.meta.env.VITE_ENV === "development",
  isStaging: import.meta.env.VITE_ENV === "staging",
  isProduction: import.meta.env.VITE_ENV === "production",
  isDocker: import.meta.env.VITE_IS_DOCKER === "true",
  appName: import.meta.env.VITE_APP_NAME,
  storagePrefix: import.meta.env.VITE_APP_STORAGE_PREFIX,
  mockLogin: import.meta.env.VITE_MOCK_LOGIN === "true",
  api: {
    baseUri: import.meta.env.VITE_API_BASE_URI,
    basePath: import.meta.env.VITE_API_BASE_PATH,
    url: `${import.meta.env.VITE_API_BASE_URI}${import.meta.env.VITE_API_BASE_PATH}`,
  },
};

// Ensure config.api.baseUri, basePath, url all end with slash
if (!config.api.baseUri.endsWith("/")) {
  config.api.baseUri += "/";
}
if (!config.api.basePath.endsWith("/")) {
  config.api.basePath += "/";
}
if (!config.api.url.endsWith("/")) {
  config.api.url += "/";
}

export default config;
