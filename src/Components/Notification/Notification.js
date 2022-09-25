import React from "react";
import {
  NotificationContainer,
  Profile,
  AccountName,
} from "./Notification.element";
import ProfileImage from "../ProfileImage/ProfileImage";

const Notification = (props) => {
  const { notificationsUsers } = props;
  return (
    <NotificationContainer>
      {notificationsUsers.map((notificationUser) => {
        return (
          <Profile key={notificationUser.id}>
            <ProfileImage
              isStoryline={true}
              img={notificationUser.profilePicture}
            ></ProfileImage>
            <AccountName>
              {notificationUser.userName} Likes your Picture
            </AccountName>
          </Profile>
        );
      })}
    </NotificationContainer>
  );
};

export default Notification;
