const API = "https://web-mall-hani.herokuapp.com";

export const fetchFromApi = async (endpoint, options) => {
  const { method, body } = { method: "POST", body: null, ...options };

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
