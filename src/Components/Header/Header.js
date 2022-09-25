import React from "react";
import {
  HeaderContainer,
  Logo,
  IconContainer,
  CurrentUserName,
  Icon,
} from "./Header.element";
import LogoIcon from "../../images/instagramLogo.png";
import { BS5FloatingAutocompleteList } from "react-bootstrap-autocomplete-list";
import { CurrentUser } from "../../Constants";
import {Popover ,OverlayTrigger,Button} from "react-bootstrap";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import { ReactComponent as Explore } from "../../images/explore.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import ProfileImage from "../ProfileImage/ProfileImage";
import Notification from "../Notification/Notification"

const Header = (props) => {
  const { usersData } = props;
  let ListOfUser = usersData.map((user) => user.userName);
  let notificationsUsers = usersData.slice(0,1);
  
  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Popover bottom">
      <Notification  notificationsUsers={ notificationsUsers}></Notification>
    </Popover>
  );
  return (
    <HeaderContainer>
      <Logo src={LogoIcon}></Logo>
      <BS5FloatingAutocompleteList list={ListOfUser} label="Search" />
      <IconContainer>
        <Icon>
          <Home />
        </Icon>
        <Icon>
          <Inbox />
        </Icon>
        <Icon>
          <Explore />
        </Icon>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
        <Notifications />
    </OverlayTrigger>
        <CurrentUserName>{CurrentUser.userName}</CurrentUserName>
        <ProfileImage
          img={CurrentUser.profilsPicture}
          isStoryline={false}
          isSmall={true}
        ></ProfileImage>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
