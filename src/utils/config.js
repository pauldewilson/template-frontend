const REQUIRED_ENV_VARS = [
  'VITE_ENV',
  'VITE_API_URL',
  'VITE_APP_NAME',
  'VITE_APP_STORAGE_PREFIX'
];

const validateEnvVars = () => {
  const missingVars = REQUIRED_ENV_VARS.filter(
    varName => import.meta.env[varName] === undefined
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}\n` +
      'Please check your .env file and ensure all required variables are defined.'
    );
  }
};

// Validate on import
validateEnvVars();

const config = {
  isDevelopment: import.meta.env.VITE_ENV === "development",
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,
  storagePrefix: import.meta.env.VITE_APP_STORAGE_PREFIX,
};

export default config;
