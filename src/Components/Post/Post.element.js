import styled from "styled-components";
import { BsHeartFill, BsFillBookmarkFill } from "react-icons/bs";

export const PostContainer = styled.div`
  border: 1px solid lightgray;
  background-color: white;
  margin-bottom: 3.5em;
  border-radius: 3px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 1%;
`;
export const ProfileName = styled.h5`
  margin: 8%;
`;
export const Caption = styled.p`
  color: #262626;
  font-weight: normal;
  margin: 1em 1em;
`;
export const PostHeaderIcon = styled.div`
  margin: 10px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
export const PostImage = styled.img`
  width: 100%;
  display: block;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
`;
export const Icons = styled.div`
  display: flex;
  padding-left: 1em;
`;
export const LikedHeart = styled(BsHeartFill)`
  color: red;
`;

export const SavedBookmark = styled(BsFillBookmarkFill)`
  color: black;
`;
export const Icon = styled.div`
  margin-right: 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const LikedByDetails = styled.div`
  display: flex;
  padding-left: 1em;
`;
export const LikeText = styled.span`
  font-size: 0.75em;
  margin-left: 0.5em;
  padding-top: 0.5em;
`;

export const CommentsContainer = styled.div`
  margin-bottom: 0.75em;
`;
export const Comments = styled.div`
  display: flex;
  padding-left: 1.5em;
  font-size: 0.75em;
  margin-bottom: 0.4em;
`;
export const NameOfUser = styled.div`
  font-weight: 600;
`;
export const CommentByUser = styled.div`
  margin-left: 0.5em;
`;
export const PostedTime = styled.div`
  font-size: 0.6em;
  padding-left: 2em;
  padding-bottom: 1em;
  color: "#8e8e8e";
  border-bottom: 1px solid lightgray;
`;
export const AddComment = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85em;
  padding: 1.5em 1.25em;
`;
export const CommentInput = styled.input`
  color: "#8e8e8e";
  font-size: 1.1em;
  font-weight: 300;
  border: none;
  width: 300px;
  &:focus {
    outline: none;
  }
`;
export const PostText = styled.button`
  background-color: white;
  color: ${({ isTyping }) => (isTyping ? "#0077be" : "#c7c7c7")};
  border: none;
  font-size: 16px;
  border-radius: 3px;
`;
export const Text = styled.div`
  margin: 10px 10px 10px 18px;
  color: "#33383D";
  font-size: 0.8em;
`;
