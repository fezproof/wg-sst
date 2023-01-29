import { SSTConfig } from "sst";
import { Frontend } from "./stacks/Frontend";
import { MyStack } from "./stacks/MyStack";

export default {
  config(input) {
    return {
      name: "wg-sst",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "nodejs16.x",
      architecture: "arm_64",
    });

    app.stack(MyStack).stack(Frontend);
  },
} satisfies SSTConfig;
