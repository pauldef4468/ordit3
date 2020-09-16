import React from "react";
import { Button } from "react-bootstrap";
import styles from "./PadButton.module.css";

function PadButton({ label, validate }) {
  return (
    <Button
      className={styles.button}
      variant="primary"
      type="submit"
      disabled={validate}
    >
      {label}
    </Button>
  );
}

export default PadButton;
