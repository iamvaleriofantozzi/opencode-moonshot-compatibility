export default async function () {
  return {
    "chat.params": async (input, output) => {
      const providerID = (input.model?.providerID ?? "").toLowerCase();
      const modelID = (input.model?.id ?? "").toLowerCase();

      if (providerID === "moonshotai" || modelID.includes("kimi")) {
        output.temperature = 1;
      }
    },
  };
}
