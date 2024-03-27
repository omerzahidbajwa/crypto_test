import React from "react";

import { WagmiProvider } from "wagmi";
// import { WagmiProvider, createConfig, http } from "wagmi";
// import { mainnet } from "wagmi/chains";
// import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./config";

import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Home from "./components/Home";

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  height: 100vh;
  justify-content: center;
  margin: auto;
  padding: 0;
  gap: 20px;
  width: 360px;
`;

// const walletConnectProjectId =
//   process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "abc";

// const config = createConfig(
//   getDefaultConfig({
//     // Your dApps chains
//     chains: [mainnet],
//     transports: {
//       // RPC URL for each chain
//       [mainnet.id]: http(
//         `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
//       ),
//     },
//     // Required API Keys
//     walletConnectProjectId,
//     // Required App Info
//     appName: "Your App Name",
//     // Optional App Info
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//   }),
// );

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {/* <ConnectKitProvider> */}
          <Wrapper>
            <Home />
          </Wrapper>
          {/* </ConnectKitProvider> */}
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}

export default App;
