import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
export const FriendContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1em;
  padding: 0.5em;
  width: 95%;
  border-radius: 3px;
  &:hover {
    border: 1px solid #dbdbdb;
    background-color: #fafafa;
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SelectedFriend = styled(AiFillCheckCircle)`
  color: blue;
`;
export const Icon = styled.div`
  margin-right: 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const AccountName = styled.span`
  font-size: 1em;
  margin: 0.4em;
  font-weight: bold;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin: 2em 0 1.5em 0;
  width: 100%;
`;
