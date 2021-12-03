import React from "react";
import Button from "../ui-custom-components/Button";
import Input from "../ui-custom-components/InputText";
import Modal from "../ui-custom-components/Modal";

import EnterExamModalStyle from "./enterExamModal.module.css";

//@ts-ignore
export default function AttendExamModal({ setOpen, open }) {
  const handleSubmit = () => {
    setOpen(false);
    alert("Done");
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  //@ts-ignore
  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Modal
      visible={true}
      title="Attend an Exam"
      onCancel={handleClickClose}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={handleClickClose}>
          Cancel
        </Button>,
        <Button
          key="submitButton"
          theme="dark"
          onClick={handleSubmit}
          style={{ marginRight: "7px", marginLeft: "10px" }}
        >
          Enter
        </Button>,
      ]}
    >
      <Input
        size="large"
        className={EnterExamModalStyle.inputStyle}
        placeholder="Enter code"
      ></Input>
    </Modal>
  );
}