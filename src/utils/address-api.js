const got = require("got");

const BASE_URL = "http://localhost:3333";

export { getUserAddresses };

async function getUserAddresses(userId) {
  const url = `${BASE_URL}/api/address/${userId}`;
  let retVal = [];
  try {
    retVal = await got(url).then(response => response.data);
  } catch (error) {
    console.log(error);
  }
  return retVal;
}
