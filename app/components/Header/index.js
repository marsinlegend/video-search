import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';
import LocaleToggle from 'containers/LocaleToggle';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Logo from '../../Icons/Logo';
import SmallLogo from '../../Icons/SmallLogo';
import Live from '../../Icons/Mirroring-screen';
import Events from '../../Icons/Radar';
import Devices from '../../Icons/Camera-video';
import Search from '../../Icons/Search-normal';
import Insights from '../../Icons/Status-up';
import Alram from '../../Icons/Alram';
import Avatar from '../../Icons/Avatar';

import './index.css';

const MyHeader = styled.div`
  position: fixed;
  height: ${({headerState}) => (headerState ? "100px" : "70px")};
  width: 100%;
  top: 0%;
  left: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 99999;
`

const MyAlram = styled(Alram)`
  margin-right: 40px;
`

const IHelp = styled.div`
  padding: 0.25em 6em 0.25em 2em;
  display: flex;
  align-items: center;
`;

const THelp = styled.span`
  margin: 0 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.085em;
  color: #414E62;
`;

const LogoWrapper = styled.div`
  margin: 20px 80px 20px 40px;
`

function Header({history}) {
  const [url, setUrl] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1]);
  const [headerState, setHeader] = useState(false);
  useEffect(() => {
    setUrl(window.location.href.split('/')[window.location.href.split('/').length - 1]);
  },[history.location.pathname]);
  return (
    <MyHeader onMouseEnter={() => {setHeader(true)}} onMouseLeave={() => {setHeader(false)}} headerState={headerState}>
      <NavBar headerState={headerState}>
        <LogoWrapper>
          {headerState ? <Logo /> : <SmallLogo />}  
        </LogoWrapper>
        <HeaderLink to="/live" isactive={url === 'live'} >
          <Live />
          <FormattedMessage {...messages.live} />
        </HeaderLink>
        <HeaderLink to="/search" isactive={url === 'search'} >
          <Search />
          <FormattedMessage {...messages.search} />
        </HeaderLink>
        <HeaderLink to="/events" isactive={url === 'events'} >
          <Events />
          <FormattedMessage {...messages.events} />
        </HeaderLink>
        <HeaderLink to="/devices" isactive={url === 'devices'} >
          <Devices />
          <FormattedMessage {...messages.devices} />
        </HeaderLink>
        <HeaderLink to="/insights" isactive={url === 'insights'} >
          <Insights />
          <FormattedMessage {...messages.insights} />
        </HeaderLink>
      </NavBar>
      <IHelp>
        <div style={{display: "flex"}}><LocaleToggle /></div>
        <THelp><FormattedMessage {...messages.help} /></THelp>
        <MyAlram />
        <div className="dropdown">
          <Avatar />
          <div className="dropdown-content">Hello</div>
        </div>
      </IHelp>
    </MyHeader>
  );
}

export default withRouter(Header);
