import React from "react";
import navstyle from "./navbar.module.css";
import navlogo from "../../public/image/sustlogo.png";
import Image from "next/image";
import { PlusOutlined } from "@ant-design/icons";
import Title from "../ui-custom-components/Title";
import CreateExamModal from "./CreateExamModal";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((value) => !value);
  };
  return (
    <>
      <div className={navstyle.navbar}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ padding: "10px", marginLeft: "10px" }}>
            <Image src={navlogo} alt="sustlogo" height="55vh" width="50vw" />
          </div>
          <div style={{ padding: "10px" }}>
            <Title
              level={5}
              style={{ marginBottom: "-5px", fontSize: "16.25px" }}
            >
              <strong>Shahjalal University of Science & Technology</strong>
            </Title>
            <Title level={4} style={{ margin: "unset", fontSize: "21px" }}>
              <strong>Online Exam Management System</strong>
            </Title>
          </div>
        </div>
        <div className={navstyle.buttonFix}>
          <button className={navstyle.button}>Active</button>
          <button className={navstyle.button}>Finished</button>
        </div>
        <div style={{ padding: "10px" }}>
          <CreateExamModal open={open} setOpen={setOpen} />
          <PlusOutlined
            style={{ fontSize: "20px", color: "#1169ba" }}
            onClick={handleClick}
          />
          profile
        </div>
      </div>
    </>
  );
};

export default Navbar;
