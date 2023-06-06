import React from 'react';
import Warning from '../../Icons/Warning';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const StyleWarn = styled.div`
    margin: 30px 0px 20px 0px;
    font-size: 16px;
    align-items: center;
    display: inline-flex;
    font-weight: 700;
`;

const LiveView = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 0px 20px 20px 0px;
    font-weight: 700;
`;

const WarnT = styled.div`
    margin-left: 10px;
    color: #828282;
    font-weight: 500;
`;
const Warn = () => (
    <>    
        <StyleWarn>
            <Warning /> <WarnT><b><FormattedMessage {...messages.note} /></b>&nbsp;&nbsp;<FormattedMessage {...messages.warning} /></WarnT>
        </StyleWarn>
        <LiveView><FormattedMessage {...messages.liveView} /></LiveView>
    </>
)

export default Warn;