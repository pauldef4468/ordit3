import React from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./PadButton.module.css";

function PadButton({ label, validate, waiting }) {
  return (
    <Button
      className={styles.button}
      variant="primary"
      type="submit"
      disabled={validate}
    >
      {waiting && (
        <Spinner
          className="mr-2"
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}

      {label}
    </Button>
  );
}

export default PadButton;
