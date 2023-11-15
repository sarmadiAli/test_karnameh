export const base_api_url = process.env.NEXT_PUBLIC_BASE_REST_URL;

export const getPosts = async (url: string) => {
  try {
    const response = await fetch(`${base_api_url}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // Rethrow the error to be handled in the calling code
  }
};
