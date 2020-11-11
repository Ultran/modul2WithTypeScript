import superUser from "./SuperUser";

function main() {
  try {
    console.log("works", superUser);
  } catch (err) {
    console.error(err.message);
  }
}

export default main;
