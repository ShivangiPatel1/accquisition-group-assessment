import React, { useState } from "react";

import {
  PostContainer,
  Profile,
  PostHeaderIcon,
  PostImage,
  IconsContainer,
  Icons,
  Icon,
  LikedByDetails,
  LikeText,
  CommentsContainer,
  PostedTime,
  AddComment,
  CommentInput,
  PostText,
  Comments,
  NameOfUser,
  CommentByUser,
  PostHeader,
  LikedHeart,
  SavedBookmark,
  Text,
  ProfileName,
  Caption,
} from "./Post.element";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";
import ProfileImage from "../ProfileImage/ProfileImage";
import Modal from "react-bootstrap/Modal";
import ListOfFriends from "../ListOfFriends/ListOfFriends";
import { CurrentUser } from "../../Constants";
import Button from "react-bootstrap/Button";

const Post = (props) => {
  const {
    userName,
    image,
    comments,
    profilePicture,
    likedBy,
    likedByNo,
    hours,
    likedByImg,
    usersData,
    caption,
  } = props;
  const [isLiked, setIsliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isTyping, setTyping] = useState(false);
  const [postComments, setPostComments] = useState(comments);
  const [commentText, setCommentText] = useState("");
  const [likeCounter, setLikeCounter] = useState(likedByNo);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AddCommentHandler = () => {
    var currentUserComment = { ...CurrentUser, text: commentText };
    setPostComments([currentUserComment, ...postComments]);
    setCommentText("");
    setTyping(false);
  };

  const OnChangeHandler = (e) => {
    setTyping(true);
    setCommentText(e.target.value);
  };

  const LikeCounterHandle = () => {
    setIsliked(!isLiked);
    if (isLiked) {
      setLikeCounter(likeCounter - 1);
    }
    if (!isLiked) {
      setLikeCounter(likeCounter + 1);
    }
  };

  return (
    <PostContainer>
      <PostHeader>
        <Profile>
          <ProfileImage
            isStoryline={true}
            isSmall={false}
            img={profilePicture}
          ></ProfileImage>
          <ProfileName>{userName}</ProfileName>
        </Profile>
        <PostHeaderIcon>
          <CardButton />
        </PostHeaderIcon>
      </PostHeader>
      <PostImage src={image}></PostImage>
      <IconsContainer>
        <Icons>
          <Icon onClick={() => LikeCounterHandle()}>
            {isLiked ? (
              <LikedHeart fontSize="1.5em" />
            ) : (
              <BsHeart fontSize="1.5em" />
            )}
          </Icon>
          <Icon>
            <FiSend fontSize="1.5em" onClick={handleShow} />
          </Icon>

          <Icon onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <SavedBookmark fontSize="1.5em" />
            ) : (
              <BsBookmark fontSize="1.5em" />
            )}
          </Icon>
        </Icons>
      </IconsContainer>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable="true"
      >
        <Modal.Header closeButton>
          <h5>Share</h5>
        </Modal.Header>
        <Modal.Body>
          <ListOfFriends usersData={usersData} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()} variant="outline-primary">
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      <LikedByDetails>
        <ProfileImage
          isStoryline={false}
          isSmall={true}
          img={likedByImg}
        ></ProfileImage>
        <LikeText>
          Liked by <strong>{likedBy}</strong> and{" "}
          <strong>{likeCounter} others</strong>
        </LikeText>
      </LikedByDetails>
      <Caption>
        <strong>{userName} </strong>
        {caption}
      </Caption>
      <Text>Comments</Text>
      <CommentsContainer>
        {postComments.map((comment, index) => {
          return (
            <Comments key={`${comment.id}_${index}`}>
              <NameOfUser>{comment.userName}</NameOfUser>
              <CommentByUser>{comment.text}</CommentByUser>
            </Comments>
          );
        })}
      </CommentsContainer>
      <PostedTime>{hours} HOURS AGO</PostedTime>
      <AddComment>
        <CommentInput
          placeholder="Add Comment"
          onChange={(e) => OnChangeHandler(e)}
          value={commentText}
        />
        <PostText onClick={() => AddCommentHandler()} isTyping={isTyping}>
          Post
        </PostText>
      </AddComment>
    </PostContainer>
  );
};

export default Post;
