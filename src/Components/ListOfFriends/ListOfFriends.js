import React from "react";
import { ListContainer } from "./ListOfFriends.element";
import Friend from "./Friend";

const ListOfFriends = (props) => {
  const { usersData } = props;

  return (
    <ListContainer>
      {usersData.map((user) => {
        return (
          <Friend
            key={user.id}
            userName={user.userName}
            profilePicture={user.profilePicture}
          />
        );
      })}
    </ListContainer>
  );
};

export default ListOfFriends;
