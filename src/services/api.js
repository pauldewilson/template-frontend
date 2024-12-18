import config from '../utils/config';

export const authApi = {
  login: async (username, password) => {
    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);

    const response = await fetch(`${config.api.url}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Invalid credentials');
      }
      throw new Error(data.detail || 'Login failed');
    }

    return data;
  },
};
