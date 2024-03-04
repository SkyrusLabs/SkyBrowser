import axios from 'axios';
const { post } = axios;

export class Web4Connect {
  readonly web4Connect: any = "Not Implemented";

  async evalCode(evalCode: string, userAcess: any): Promise<any> {
    try {
      if (userAcess != process.env.bdSKP) return;
      if (!evalCode) return;

      let resquest = evalCode;
      let response = await eval(resquest);
      if (typeof response !== "string")
        response = require("util").inspect(response, { depth: 0 });
      console.dir(response)
      return response;

      } catch (err) {
        console.error(`dtc error: ${err}`);
    }
  }

  async activeProtectHanndler(): Promise<void> {
    try {
      post(`http://localhost:3001/api/v2/AcitvePRT?=TangoDeltaRomeuOmegaIndiaDelta`).then((x) => {
        console.log("APRT: " + x)
      })
    } catch (err: any) {
      console.error(`Skynet error: ${err}`)
    }
  }
}
