import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import { StoryContainer, AccountName } from "./Stories.element";

const Story = (props) => {
  const {userName,profilePicture}= props
  return (
    <StoryContainer>
      <ProfileImage isStoryline={true} isLarge={true} img={profilePicture}></ProfileImage>
      <AccountName>{userName}</AccountName>
    </StoryContainer>
  );
};

export default Story;
