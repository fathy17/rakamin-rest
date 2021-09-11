import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 1000,
  headers: { Accept: "application/json" },
});

export { instance };
