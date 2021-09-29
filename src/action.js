const axios = require("axios");

async function run() {
  try {
    const response = await axios(
      " https://futuramaapi.herokuapp.com/api/characters/Dr-Zoidberg/1"
    );
    const { data } = response;
    const firstEntry = data[0];
    console.log(`${firstEntry.character} ${firstEntry.quote}`);
  } catch (error) {
    console.log(error);
  }
}
run();
