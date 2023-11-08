import { getGlobalState } from "../components/common/store";

export const BASE_URL = process.env.REACT_APP_API_URL;
export const TOKEN_VALUE = "umecartsToken";

export function useUrls() {
  const categoryId = getGlobalState('categoryId')
  // Auth endpoints
  const loginUrl = `${BASE_URL}/auth/signin`;
  const registerUrl = `${BASE_URL}/auth/signup`;
  const getUserUrl = `${BASE_URL}/auth/getMe`;
  const getGalleryUrl = `${BASE_URL}/gallery`;
  const getCategoryUrl = `${BASE_URL}/category/${categoryId}`;
  const getBrandUrl = `${BASE_URL}/brand/${categoryId}`;
  const getTagUrl = `${BASE_URL}/product/tags`;
  return {
    loginUrl, 
    registerUrl,
    getUserUrl,
    getGalleryUrl,
    getCategoryUrl,
    getBrandUrl,
    getTagUrl
  };
}
