import axios from "axios";

export const GET = async (url) => {
  try {
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const POST = async (url, payload) => {
  try {
    const res = await axios({
      method: "POST",
      url,
      data: payload,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const PUT = async (url, payload) => {
  try {
    const res = await axios({
      method: "PUT",
      url,
      data: payload,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const PATCH = async (url, payload) => {
  try {
    const res = await axios({
      method: "PATCH",
      url,
      data: payload,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const DELETE = async (url) => {
  try {
    const res = await axios({
      method: "DELETE",
      url,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
  }
};
