export const base_api_url = process.env.NEXT_PUBLIC_BASE_REST_URL;

export const getQuestion = async (url: string) => {
  try {
    const response = await fetch(`${base_api_url}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createQuestion = async (url: string, body: any) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
      ...body,
    });

    const response = await fetch(`${base_api_url}${url}`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getQuestionDetail = async (
  url: string,
  id: number | string | string[]
) => {
  try {
    const response = await fetch(`${base_api_url}${url}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const patchQuestionDetail = async (
  url: string,
  id: number | string | string[],
  body: any
) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
      ...body,
    });

    const response = await fetch(`${base_api_url}${url}/${id}`, {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
