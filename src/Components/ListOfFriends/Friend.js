import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import ProfileImage from "../ProfileImage/ProfileImage";
import {
  FriendContainer,
  AccountName,
  Profile,
  SelectedFriend,
  Icon,
} from "./ListOfFriends.element";
const Friend = (props) => {
  const [selectFriend, setSelectFriend] = useState(false);
  const { userName, profilePicture } = props;

  return (
    <FriendContainer>
      <Profile>
        <ProfileImage isStoryline={true} img={profilePicture}></ProfileImage>
        <AccountName>{userName}</AccountName>
      </Profile>
      <Icon
        onClick={() => {
          setSelectFriend(!selectFriend);
        }}
      >
        {selectFriend ? <SelectedFriend /> : <BsCircle />}
      </Icon>
    </FriendContainer>
  );
};

export default Friend;
