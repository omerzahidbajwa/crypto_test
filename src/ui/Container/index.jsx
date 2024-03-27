import React from "react";
import styled from "styled-components";
import styles from "./styles.module.css";

const Box = styled.div`
  box-shadow: ${(props) => props.theme.shadow.prepo};
`;

const Container = (props) => {
  const { children } = props || {};
  return <Box className={styles.container}>{children}</Box>;
};

export default Container;
