import React from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'rsuite';

export default styled(DateRangePicker)`
    .rs-picker-toggle {
        font-size: 16px;
        font-weight: 400;
        width: 320px;
        border-radius: 60px;
        display: flex;
        align-items: center;
    }
    .rs-stack-item {
        padding: 4px 0;
    }
`