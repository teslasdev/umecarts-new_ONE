export const BASE_URL = process.env.REACT_APP_API_URL;
export const TOKEN_VALUE = "umecartsToken";

export function useUrls() {
  // Auth endpoints
  const loginUrl = `${BASE_URL}/auth/signin`;
  const registerUrl = `${BASE_URL}/auth/signup`;
  return {
   loginUrl, 
   registerUrl
  };
}
