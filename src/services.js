import axios from "axios";

export const GET = async (url, getAuthMethod, authValue) => {
  let requestOption = {
    method: "GET",
    url,
    "Content-type": "application/json; charset=UTF-8",
  };

  switch (getAuthMethod) {
    case "bearerToken":
      requestOption = {
        ...requestOption,
        headers: {
          Authorization: `Bearer ${authValue?.bearerToken}`,
        },
      };
      break;
    case "basicAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
        },
      };
      break;
    case "digestAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
          type: "digest",
        },
      };
      break;
    case "customAuth":
      requestOption = {
        ...requestOption,
        headers: {
          [authValue?.customTokenName]: authValue?.customTokenValue,
        },
      };
      break;
    default:
      requestOption = {
        method: "GET",
        url,
        "Content-type": "application/json; charset=UTF-8",
      };
      break;
  }

  console.log("GET requestOption: ", requestOption);

  try {
    const res = await axios(requestOption);
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};

export const POST = async (url, payload, getAuthMethod, authValue) => {
  let requestOption = {
    method: "POST",
    url,
    data: payload,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  console.log("getAuthMethod", getAuthMethod);

  switch (getAuthMethod) {
    case "bearerToken":
      requestOption = {
        ...requestOption,
        headers: {
          Authorization: `Bearer ${authValue?.bearerToken}`,
        },
      };
      break;
    case "basicAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
        },
      };
      break;
    case "digestAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
          type: "digest",
        },
      };
      break;
    case "customAuth":
      requestOption = {
        ...requestOption,
        headers: {
          [authValue?.customTokenName]: authValue?.customTokenValue,
        },
      };
      break;
    default:
      requestOption = {
        method: "POST",
        url,
        data: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      break;
  }

  console.log("POST requestOption: ", requestOption);

  try {
    const res = await axios(requestOption);
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};

export const PUT = async (url, payload, getAuthMethod, authValue) => {
  let requestOption = {
    method: "PUT",
    url,
    data: payload,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  switch (getAuthMethod) {
    case "bearerToken":
      requestOption = {
        ...requestOption,
        headers: {
          Authorization: `Bearer ${authValue?.bearerToken}`,
        },
      };
      break;
    case "basicAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
        },
      };
      break;
    case "digestAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
          type: "digest",
        },
      };
      break;
    case "customAuth":
      requestOption = {
        ...requestOption,
        headers: {
          [authValue?.customTokenName]: authValue?.customTokenValue,
        },
      };
      break;
    default:
      requestOption = {
        method: "PUT",
        url,
        data: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      break;
  }

  console.log("PUT requestOption: ", requestOption);

  try {
    const res = await axios(requestOption);
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};

export const PATCH = async (url, payload, getAuthMethod, authValue) => {
  let requestOption = {
    method: "PATCH",
    url,
    data: payload,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  switch (getAuthMethod) {
    case "bearerToken":
      requestOption = {
        ...requestOption,
        headers: {
          Authorization: `Bearer ${authValue?.bearerToken}`,
        },
      };
      break;
    case "basicAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
        },
      };
      break;
    case "digestAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
          type: "digest",
        },
      };
      break;
    case "customAuth":
      requestOption = {
        ...requestOption,
        headers: {
          [authValue?.customTokenName]: authValue?.customTokenValue,
        },
      };
      break;
    default:
      requestOption = {
        method: "PATCH",
        url,
        data: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      break;
  }

  console.log("PATCH requestOption: ", requestOption);

  try {
    const res = await axios(requestOption);
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};

export const DELETE = async (url, getAuthMethod, authValue) => {
  let requestOption = {
    method: "DELETE",
    url,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  switch (getAuthMethod) {
    case "bearerToken":
      requestOption = {
        ...requestOption,
        headers: {
          Authorization: `Bearer ${authValue?.bearerToken}`,
        },
      };
      break;
    case "basicAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
        },
      };
      break;
    case "digestAuth":
      requestOption = {
        ...requestOption,
        auth: {
          username: authValue?.userName,
          password: authValue?.password,
          type: "digest",
        },
      };
      break;
    case "customAuth":
      requestOption = {
        ...requestOption,
        headers: {
          [authValue?.customTokenName]: authValue?.customTokenValue,
        },
      };
      break;
    default:
      requestOption = {
        method: "DELETE",
        url,
        data: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      break;
  }

  console.log("DELETE requestOption: ", requestOption);

  try {
    const res = await axios(requestOption);
    console.log("Response: ", res);
    return res;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};
