import axios from 'axios';
/* const { post, get, patch, put, Axios, VERSION } = axios; */

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
}
