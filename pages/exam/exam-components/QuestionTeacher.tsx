import React, { useState } from "react";
import Upload from "../../../src/ui-custom-components/Upload";
import Text from "../../../src/ui-custom-components/Text";
import Link from "../../../src/ui-custom-components/Link";
import Button from "../../../src/ui-custom-components/Button";
import QuestionStyle from "./question.module.css";

const QuestionTeacher = () => {
  const [status, setStatus] = useState<string>("finished");
  const [link, setLink] = useState<string>();
  if (status === "upcoming") {
    return (
      <div className={QuestionStyle.question}>
        <Text style={{ fontSize: "18px", marginBottom: "10px" }}>
          Exam Code: 22
        </Text>
        {link && (
          <Link style={{ fontSize: "18px" }} href={link} target="_blank">
            Question link.
          </Link>
        )}
        <Upload setLink={setLink} />
        <Button theme="dark" style={{ marginTop: "10px" }}>
          Upload
        </Button>
      </div>
    );
  } else if (status === "running") {
    return (
      <div className={QuestionStyle.question}>
        <Text style={{ fontSize: "18px", marginBottom: "10px" }}>
          Exam Code: 22
        </Text>
        {link && (
          <Link style={{ fontSize: "18px" }} href={link} target="_blank">
            Question link.
          </Link>
        )}
      </div>
    );
  } else {
    return (
      <div className={QuestionStyle.question}>
        <Text style={{ fontSize: "18px", marginBottom: "10px" }}>
          Exam Code: 22
        </Text>
        {link && (
          <Link style={{ fontSize: "18px" }} href={link} target="_blank">
            Question link.
          </Link>
        )}
        <Button theme="dark" style={{ marginTop: "10px" }}>
          Download Scripts
        </Button>
      </div>
    );
  }
};

export default QuestionTeacher;
