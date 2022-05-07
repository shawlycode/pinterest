import Router from "./src/Navigations/Route";

import { NhostClient, NhostReactProvider } from "@nhost/react";
import * as SecureStore from "expo-secure-store";

const nhost = new NhostClient({
  backendUrl: " https://sicidgzhdkitxbxrpjrn.nhost.run",
  clientStorageType: "expo-secure-storage",
  clientStorage: "SecureStore",
});
export default function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <Router />;
    </NhostReactProvider>
  );
}
