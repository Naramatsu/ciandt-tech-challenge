import React from "react";
import classNames from "classnames";
import "./Toast.style.scss";

const Toast = ({ message, visible }) => {
  const isVisible = visible ? "visible" : "";
  const toastClassNames = classNames("toast", isVisible);
  return <section className={toastClassNames}>{message}</section>;
};

export default Toast;
