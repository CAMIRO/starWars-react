import styled, { keyframes } from "styled-components";

export const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <LoadingText>Loading...</LoadingText>
      <LightSaber>
        <Saber />
        <Light />
      </LightSaber>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  width: 100%
  height: 800px;

`;

const LightSaber = styled.div`
margin-top: 10px;
width: 100%
height: 800px;
background: blue;
display: flex;
flex-direction: row;
`;

const Saber = styled.div`
  position: absolute;
  margin-left: 10px;
  height: 10px;
  width: 50px;
  border-radius: 5px;
  background: -webkit-linear-gradient(
    left,
    white,
    white 30%,
    #999999,
    #999999 40%
  );
`;

const saberSlice = keyframes`
    0% {
        background: #f21a1d;
        box-shadow: 0 0 10px #f21a1d; 
        width: 10px;
        left: 0
    }
    50% {
        background: #f21a1d;
        box-shadow: 0 0 10px #f21a1d; 
        width: 200px;
        left: 0
    }
`;

const Light = styled.div`
  position: absolute;
  margin-left: 50px;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: #f21a1d;
  box-shadow: 0 0 10px #f21a1d;
  animation: ${saberSlice} 3s ease infinite;
`;

const LoadingText = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
