import React from 'react';
import { CheckTreePicker } from 'rsuite';
import styled from 'styled-components';

export default styled(CheckTreePicker)`
    margin-right: 20px;
    .rs-picker-toggle {
        font-size: 16px;
        font-weight: 400;
        width: 250px;
        border-radius: 60px;
        display: flex;
        align-items: center;
    }
    .rs-stack-item {
        padding: 4px;
        svg {
            padding: 0;
        }
    }
`