import library from "./Library";
function main() {
  try {
    console.log(library);
  } catch (err) {
    console.error(err.message);
  }
}

export default main;
