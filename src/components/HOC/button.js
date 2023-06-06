
import { Button } from "antd";
import React from "react";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <Button className="primary-button" onClick={onClick}>
      {text}
    </Button>
  );
};
