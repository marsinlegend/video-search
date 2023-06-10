import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import SmallCard from '../../Icons/Group16';
import MidCard from '../../Icons/Group15';
import BigCard from '../../Icons/Group17';
import OneCard from '../../Icons/Map';
import Arrow from '../../Icons/Arrow';
import Ellipse from '../../Icons/Ellipse';
import Search from '../../Icons/Search';
import Archieve from '../../Icons/Archieve';

import Devices from '../../Icons/Devices';
import './Switch.css';

import MockData from './MockData';
import A from '../../components/Header/A';
import { withRouter } from 'react-router-dom';
import messages from './messages';

const Rectangle = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ videoId }) => (!videoId ? 'none' : '3px solid #FE6601')};
`;

const MySelect = styled.input`
  padding: 7px 13px;
  width: 250px;
  margin: none;
  border: none;
  background: transparent;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #ced4da;
  border-radius: 4px;
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
`;

const OnlineSelect = styled.div`
  display: flex;
  align-items: center;
  color: black;
  margin: 0px 27px;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.025em;
  }
`;

const ViewWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.05em;
  color: #292929;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 4px;
  cursor: pointer;
`;
const WallBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  margin: 0 4px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  background: #212529;
  opacity: 65%;
  border-radius: 3.2px;
  line-height: 150%;
  cursor: pointer;
`;

const SortWrapper = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #292929;
  select {
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ video, viewMethod }) =>
      video === 1 ? 3 / viewMethod : 6 / viewMethod},
    1fr
  );

  row-gap: 30px;

  padding: 10px 13.5px 10px 0px;
  /* height: fit-content; */
`;

const Content = styled.div`
  display: ${({ mapView }) => (mapView ? 'none' : 'flex')};
`;

const ImageW = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const CameraP = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 16px;
  font-weight: 700;
`;

const RoomP = styled.div`
  display: flex;
  align-items: center;
  color: #828282;
  font-size: 20px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const MyScroll = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0px;
  top: 0px;
`;

const ScrollBtn = styled.button`
  border-radius: 50%;
  border: 1.5px solid #828282;
  background-color: white;
  cursor: pointer;
  color: gray;
`;

const Hr = styled.hr`
  background-color: black;
  width: 1px;
  margin: 8px;
  height: 520px;
`;

const VideoWrapper = styled.div`
  display: ${({ video }) => (video === 1 ? 'flex' : 'none')};
  position: absolute;
  left: 50%;
  flex-direction: column;
  row-gap: 8px;
  margin-left: 54px;
`;

const CameraInfo = styled.div`
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  color: black;
  display: flex;
  margin-bottom: 12px;
`;

const SearchBtn = styled.button`
  padding: 10px;
  width: fit-content;
  background-color: #828282;
  border: 1px solid #828282;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ClipBtn = styled.button`
  width: 113px;
  border: 1px solid #212529;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 6px;
  font-weight: 500;
  letter-spacing: -0.05em;
  background-color: #212529;
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const MySpan = styled.span`
  margin: 0 12px;
`;

const MyArrow = styled.div`
  cursor: pointer;
`;
const ContainLeft = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-start;
`;
const ContainRight = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-end;
`;
const ImageGroup = styled.div`
  height: 600px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: ${({ video }) => `${100 / (video + 1)}%`};
`;
const LiveView = () => {
  const [video, setVideo] = useState(0);
  const [videoId, setVideoId] = useState(null);
  const [cameraId, setCamera] = useState('');
  const [roomId, setRoom] = useState('');
  const [viewMethod, setView] = useState(1);
  const [mapView, setMapView] = useState(0);
  console.timeLog('mapView, ', mapView);
  const scrollRef = useRef(null);
  const handleScrollUp = () => {
    scrollRef.current.scrollTop -= 20;
  };
  const handleScrollDown = () => {
    scrollRef.current.scrollTop += 20;
  };
  return (
    <div>
      <Container>
        <ContainLeft>
          <SearchContainer>
            <MySelect type="select" placeholder="All Cameras" />
            <IconWrapper>
              <Devices />
            </IconWrapper>
          </SearchContainer>
          <OnlineSelect>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
            <span>
              <FormattedMessage {...messages.onlineState} />
            </span>
          </OnlineSelect>
        </ContainLeft>
        <ContainRight>
          <ViewWrapper>
            <FormattedMessage {...messages.view} /> &nbsp;&nbsp;&nbsp;
            <CardWrapper
              view={viewMethod === 1}
              onClick={() => {
                setView(1);
              }}
            >
              <SmallCard />
            </CardWrapper>
            <CardWrapper
              onClick={() => {
                setView(2);
              }}
            >
              <MidCard />
            </CardWrapper>
            <CardWrapper
              onClick={() => {
                setView(3);
              }}
            >
              <BigCard />
            </CardWrapper>
            <CardWrapper
              onClick={() => {
                setMapView(1);
              }}
            >
              <OneCard />
            </CardWrapper>
            <WallBtn>
              <FormattedMessage {...messages.customWall} />
            </WallBtn>
            <SortWrapper>
              <FormattedMessage {...messages.sortby} />
              <select>
                <option value="volvo">Location</option>
                <option value="saab">Location</option>
                <option value="opel">Location</option>
                <option value="audi">Location</option>
              </select>
            </SortWrapper>
          </ViewWrapper>
        </ContainRight>
      </Container>
      <Content mapView={mapView}>
        <ImageContainer video={video}>
          <ImageGroup>
            <ImageWrapper video={video} viewMethod={viewMethod} ref={scrollRef}>
              {MockData.map((Mock, id) => (
                <ImageW key={`mock-video-${id}`}>
                  <Rectangle
                    width={`${285 * viewMethod}px`}
                    height={`${173 * viewMethod}px`}
                    videoId={videoId === id}
                    onClick={() => {
                      setVideo(1);
                      setCamera(Mock.cameraId);
                      setRoom(Mock.roomId);
                      setVideoId(id);
                    }}
                  />
                  <RoomP>{Mock.roomId}</RoomP>
                  <CameraP>{Mock.cameraId}</CameraP>
                </ImageW>
              ))}
            </ImageWrapper>
          </ImageGroup>
          <MyScroll>
            <ScrollBtn onClick={handleScrollUp}>&and;</ScrollBtn>
            <Hr />
            <ScrollBtn onClick={handleScrollDown}>&or;</ScrollBtn>
          </MyScroll>
        </ImageContainer>
        <VideoWrapper video={video}>
          <CameraInfo>
            <MyArrow
              onClick={() => {
                setVideo(0);
                setVideoId('');
              }}
            >
              <Arrow />
            </MyArrow>
            <MySpan>{roomId + ' - ' + cameraId}</MySpan>
            <Ellipse />
          </CameraInfo>
          <SearchBtn>
            <Search />
            &nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.searchRecording} />
          </SearchBtn>
          <div>
            <ReactPlayer
              url="../../Media/test.mp4"
              controls={true}
              width="100%"
            />
          </div>
          <ClipBtn>
            <Archieve />
            &nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.makeClip} />
          </ClipBtn>
        </VideoWrapper>
      </Content>
    </div>
  );
};

export default LiveView;
