import * as main from "./main";

async function sampleApp()
{
  // tslint:disable:no-console
  console.log("main=", main);
  // tslint:disable:no-console no-unsafe-any
  console.log(await main.greeter("Harald"));
}

sampleApp().then(() => {
    // tslint:disable:no-console
    console.log("Done");
  }).catch((e:string) => {
  console.error("Error: ", e);
});

