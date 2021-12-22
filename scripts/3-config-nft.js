import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x16412Ec28F93885c450e0758F01C22D0F6135A4C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Ingot",
        description: "This NFT will give you access to SLAAAFUCCDAO!",
        image: readFileSync("scripts/assets/splashingot.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
