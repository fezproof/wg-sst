import { StackContext, SolidStartSite } from "sst/constructs";

export function Frontend({ stack }: StackContext) {
  const solidSite = new SolidStartSite(stack, "site", {
    path: "frontend",
  });

  stack.addOutputs({
    SiteUrl: solidSite.url ?? "http://localhost:5173",
  });
}
