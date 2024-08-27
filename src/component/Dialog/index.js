import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const DialogModule = ({ header, visible, onHide, footer, children }) => {
  return (
    <Dialog
      header={header}
      visible={visible}
      style={{
        // width: "40vw",
        height: "400px",
        background: "ghostwhite",
        padding: "20px 30px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      footer={footer}
      onHide={onHide}
    >
      {children}
    </Dialog>
  );
};

export default DialogModule;
