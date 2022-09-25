import styled from "styled-components";
export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  display: block;
  width: ${({ isSmall }) => (isSmall ? "25px" : "35px")};
  height: ${({ isSmall }) => (isSmall ? "25px" : "35px")};

  &:hover {
    cursor: pointer;
  }
`;

export const LargeImage = styled.img`
border-radius: 50%;
  border: 2px solid white;
  display: block;
  width: 60px;
  height: 60px

  &:hover {
    cursor: pointer;
  }
`;

export const Storyline = styled.div`
  padding: 2px;
  background: linear-gradient(
    200deg,
    #da3394 25%,
    #e03c67 50%,
    #f3753b 75%,
    #f99b4a 100%
  );
  border-radius: 50%;
`;
