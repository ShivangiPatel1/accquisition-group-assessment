import styled from "styled-components";

export const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0.5em;
`;

export const AccountName = styled.span`
  font-size: 0.65em;
  margin: 0.4em;
`;
export const StroiesContainer = styled.div`
  display: flex;
  align-content: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin: 2em 0 1.5em 0;
  height: 7.4em;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;
