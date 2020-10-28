import item1 from "./Item";
function main() {
  try {
    console.log(item1);
  } catch (err) {
    console.error(err.message);
  }
}

export default main;
