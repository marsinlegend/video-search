import styled from 'styled-components';

export default styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  span {
    display: ${({headerState}) => (headerState ? "flex" : "none")};
    margin-top: 8px;
    color: #414E62 !important;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
`;
