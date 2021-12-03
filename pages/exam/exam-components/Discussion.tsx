import React from "react";
import Text from "../../ui-custom-components/Text";
import DiscussionStyle from "./discussion.module.css";
import { Divider } from "antd";
import InputCommentBox from "./InputComment";
import { imageLink } from "../../data";
import Image from "next/image";
import SingleComment from "./SingleComment";

const Discussion = () => {
  const myLoader = () => {
    return imageLink;
  };
  return (
    <div className={DiscussionStyle.discussion}>
      <div style={{ alignItems: "left" }}>
        <Text>2 Comments</Text>
        <Divider style={{ margin: "15px 0px" }} />
        <div className={DiscussionStyle.singleComment}>
          <div className={DiscussionStyle.myImage}>
            <Image
              loader={myLoader}
              src="profilePicture.png"
              alt="profilePicture"
              height="35vh"
              width="35vw"
            />
          </div>
          <div>
            <Text>
              <strong> Quamrul Islam </strong>
            </Text>
            <br />
            <Text>We can see this exam from a Nationalist point of view.</Text>
            <br />
          </div>
        </div>
        <div className={DiscussionStyle.singleComment}>
          <div className={DiscussionStyle.myImage}>
            <Image
              loader={myLoader}
              src="profilePicture.png"
              alt="profilePicture"
              height="35vh"
              width="35vw"
            />
          </div>
          <div>
            <Text>
              <strong> Quamrul Islam </strong>
            </Text>
            <br />
            <Text>We can see this exam from a Nationalist point of view.</Text>
            <br />
          </div>
        </div>
      </div>
      <Divider />
      <div className={DiscussionStyle.commentFooter}>
        <div className={DiscussionStyle.myImage}>
          <Image
            loader={myLoader}
            src="profilePicture.png"
            alt="profilePicture"
            height="35vh"
            width="35vw"
          />
        </div>
        <InputCommentBox />
      </div>
    </div>
  );
};

export default Discussion;
