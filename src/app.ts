
async function f()
{
  const greet = require("./main.js");
  console.log("greet=", greet);
  console.log(await greet.greeter("Harald"));
  console.log("Done")
}

f();
