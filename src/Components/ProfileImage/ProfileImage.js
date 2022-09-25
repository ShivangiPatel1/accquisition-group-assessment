import React from "react";
import { Storyline, Image, LargeImage } from "./ProfileImage.element";

const ProfileImage = (props) => {
  return (
    <div>
      {props.isLarge ? (
        <Storyline>
          <LargeImage src={props.img} />
        </Storyline>
      ) : props.isStoryline ? (
        <Storyline>
          <Image src={props.img} isSmall={props.isSmall} />
        </Storyline>
      ) : (
        <Image src={props.img} isSmall={props.isSmall} />
      )}
    </div>
  );
};

export default ProfileImage;
