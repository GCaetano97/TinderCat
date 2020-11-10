import axios from "axios";
const url = "https://api.thecatapi.com/v1/images/search";

var randomCat = async () => {
  const request = await axios.get(url);
  return request;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { randomCat: randomCat };
