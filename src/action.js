const axios = require("axios");
const core = require("@actions/core");

const DEFAULT_CHARACTER = "Robot-Mob";

async function run() {
  const character = core.getInput("character") || DEFAULT_CHARACTER;
  try {
    const response = await axios(
      ` https://futuramaapi.herokuapp.com/api/characters/${character}/1`
    );
    const { data } = response;
    const firstEntry = data[0];
    console.log(`${firstEntry.character} ${firstEntry.quote}`);
  } catch (error) {
    console.log(error);
  }
}
run();
