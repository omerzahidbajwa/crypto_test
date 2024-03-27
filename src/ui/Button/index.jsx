import React from "react";
import styles from "./styles.module.css";

const Button = (props) => {
  const { disabled = false, label, onClick } = props || {};
  const buttonProps = {
    className: styles.button,
    disabled,
    onClick,
  };
  return <button {...buttonProps}>{label}</button>;
};

export default Button;
