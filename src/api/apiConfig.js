const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log("Base URL:", BASE_URL);
const apiConfig = {
  clientLogin: `${BASE_URL}/api/auth/client/login`,
  clientLogout: `${BASE_URL}/api/auth/client/logout`,
  me: `${BASE_URL}/api/auth/client/me`,
  createWatch: `${BASE_URL}/api/watches/createWatch`,
  getAllWatches: `${BASE_URL}/api/watches`,
};

export { apiConfig };
