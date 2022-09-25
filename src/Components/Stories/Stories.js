import React from "react";
import { StroiesContainer } from "./Stories.element";
import Story from "./Story";

const Stories = (props) => {
  const { usersData } = props;
  return (
    <StroiesContainer>
      {usersData.map((user) => {
        return (
          <Story
            key={user.id}
            userName={user.userName}
            profilePicture={user.profilePicture}
          />
        );
      })}
    </StroiesContainer>
  );
};

export default Stories;
