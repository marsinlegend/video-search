import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;

  justify-content: center;
  padding: 0;
  margin: 0 15px;
  cursor: pointer;
  outline: none;
  font-family: 'Rato', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: ${({ isactive }) => (isactive ? '#FF6600' : '#414E62')};
  text-align: center;
  flex-direction: column;
  align-items: center;
  text-decoration: none !important;
  width:100px;
  span {
    color: ${({ isactive }) => (isactive ? '#FF6600 !important' : '#414E62')};]
    font-family: 'Lato';
  }
  &:hover {
    color: #FF6600;
    svg {
      stroke: #FF6600;
      fill: #FF6600;
    }
    span {
      color: #FF6600 !important;
    }
  }
  svg {
    stroke: ${({ isactive }) => (isactive ? '#FF6600' : '#414E62')};
    fill: ${({ isactive }) => (isactive ? '#FF6600' : '#414E62')};
  }
`;
