import data from "../data/data.json";

const timeout = (ms) => new Promise((res) => setTimeout(res, ms));

export default async function fakeFetch(url, { method, body, ...options }) {
  await timeout(100);
  return {
    async json() {
      await timeout(100);
      return data;
    },
  };
}
