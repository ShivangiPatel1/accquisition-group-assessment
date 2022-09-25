import styled from "styled-components";
export const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 5px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-content: center;
  justify-content: center;
  gap:8%
`;
export const Logo = styled.img`
margin-top:0.5% ;
  height: 8%;
  width: 8%;
`;
export const IconContainer = styled.div`
margin-top:0.5% ;
  display: flex;
  padding-right: 1.5em;
`;

export const Icon = styled.div`
  margin-right: 1.5em;
  width: 23px;
  height: 23px;

  &:hover {
    cursor: pointer;
  }
`;
export const CurrentUserName = styled.h5`
  margin-right: 0.4em;
  margin-left: 0.4em;
  color: #0077be;
`;
