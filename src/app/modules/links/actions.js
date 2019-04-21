import { SAVE_LINKS } from "./action-types";

const API_SERVER = "http://localhost:8888";

export function saveLinks(links) {
  return {
    type: SAVE_LINKS,
    payload: links
  };
}

export const fetchLinks = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${API_SERVER}/v1/link`);
    const links = await response.json();
    dispatch(saveLinks(links));
  } catch (error) {
    console.log("throwing Error", error);
    throw error;
  }
};

export const fetchUrlByHash = hash => async (dispatch, getState) => {
  try {
    const response = await fetch(`${API_SERVER}/v1/link/${hash}`);
    const link = await response.json();
    return link;
  } catch (error) {
    console.log("fetchUrlByHash Error", error);
    throw error;
  }
};

export const removeLink = id => async (dispatch, getState) => {
  try {
    const response = await fetch(`${API_SERVER}/v1/link/${id}`, {
      method: "DELETE"
    });

    const success = await response.text();
    dispatch(fetchLinks());
    return success;
  } catch (error) {
    console.log("removeLink Error", error);
    throw error;
  }
};

export const updateLink = (id, editedUrl) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${API_SERVER}/v1/link/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        url: editedUrl
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const success = await response.text();
    dispatch(fetchLinks());
    return success;
  } catch (error) {
    console.log("updateLink Error", error);
    throw error;
  }
};

export const createLink = link => async (dispatch, getState) => {
  try {
    const response = await fetch(`${API_SERVER}/v1/link`, {
      method: "POST",
      body: JSON.stringify({
        url: link
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const resp = await response.json();
    return resp;
  } catch (error) {
    console.log("throwing Error", error);
    throw error;
  }
};

export const fetchLinksData = () => async (dispatch, getState) => {
  try {
    const links = [
      { id: "11111", url: "http://shahjada.me", hash: "ytYuh" },
      { id: "22222", url: "https://google.com", hash: "mpDhu" },
      { id: "33333", url: "https://facebook.com", hash: "pmyTh" }
    ];
    dispatch(saveLinks(links));
  } catch (error) {
    console.log("throwing Error", error);
    throw error;
  }
};
