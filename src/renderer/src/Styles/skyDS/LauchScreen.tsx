import React from "react";
import ReactPlayer from "react-player";
import skyLauch from "./assets/SkyLauch.mov";
import styled from "styled-components";

const LaunchScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const VideoPlayer = styled(ReactPlayer)`
  outline: none;
`;

const LaunchScreen: React.FC = () => {
  return (
    <LaunchScreenContainer>
      <VideoPlayer
        url={skyLauch}
        playing={true}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
      />
    </LaunchScreenContainer>
  );
};

export default LaunchScreen;
