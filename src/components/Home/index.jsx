import React from "react";
import { useAccount, useBalance } from "wagmi";
import { sendTransaction } from "@wagmi/core";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import styles from "./styles.module.css";
import ConnectWallet from "../ConnectWallet";
import { parseEther } from "viem";
import { config } from "../../config";

const Home = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });

  const { data: fakeBalance } = useBalance({
    address: "0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5",
  });

  const handleSend = async () => {
    try {
      const result = await sendTransaction(config, {
        to: "0xCbA1Ad669A2B590F42c5d8D2D3aB91fBF9556Aa8",
        value: parseEther("0.01"),
      });
      console.log("result", result);
    } catch (error) {
      console.error("send error", error);
    }
  };

  if (isConnected) {
    return (
      <Container>
        <div className={styles.textBlock}>
          <span>Welcome,</span>
          <span className={styles.value}>{`${address.substring(
            0,
            6,
          )}...SignerAddress`}</span>
        </div>
        <div className={styles.labelBox}>
          <label>ETH Balance: {`${balance?.formatted || 0}`}</label>
          <label>FAKE_WETH Balance: {`${fakeBalance?.formatted || 0}`} </label>
        </div>
        <Button label="Send" onClick={handleSend} />
      </Container>
    );
  }

  return <ConnectWallet />;
};

export default Home;
