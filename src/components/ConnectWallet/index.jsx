import React from "react";
// import { ConnectKitButton } from "connectkit";
import { useConnect } from "wagmi";

import styles from "./styles.module.css";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

const ConnectWallet = () => {
  const { connectors, connect } = useConnect();
  const handleConnect = async () => {
    try {
      console.log("connecting", connectors[0]);
      await connect({ connector: connectors[0] });
    } catch (error) {
      console.error("connect error", error);
    }
  };

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    console.log("connectors", connectors);
    (async () => {
      const provider = await connectors?.[0]?.getProvider();
      setReady(!!provider);
    })();
  }, [connectors]);

  return (
    <Container>
      {/* <ConnectKitButton /> */}
      <div className={styles.heading}>
        Connect wallet to send FAKE_WETH token
      </div>
      <Button
        disabled={!ready}
        label="Connect Wallet"
        onClick={handleConnect}
      />
    </Container>
  );
};

export default ConnectWallet;
