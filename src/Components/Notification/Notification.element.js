import styled from "styled-components";

export const NotificationContainer = styled.div`
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
export const AccountName = styled.span`
  font-size: 1em;
  margin: 0.4em;
  font-weight: bold;
`;
