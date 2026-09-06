import { auth } from "./firebase";

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const user = auth.currentUser;
  let token = "";
  
  if (user) {
    token = await user.getIdToken();
  }

  const headers = {
    ...options.headers,
    "Authorization": `Bearer ${token}`
  };

  return fetch(url, { ...options, headers });
}
