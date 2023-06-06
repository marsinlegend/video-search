import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
const SearchCondition = styled.div`
    margin: 2px;
    background: white;
    color: #344051;
    font-weight: 600;
    font-size: 16px;
    background-color: ${({bgcolor}) => (bgcolor)};
    color: ${({color}) => (color)};
    position: relative;
    padding: 4px 12px 4px 12px;
`
const MyTags = styled.div`
  display: ${({tagState}) => (tagState ? "none" : "flex")};
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 2px;
  cursor: pointer;
  position: absolute;
  width: 200px;
  left: 200px;
  top: 0px;
  flex-direction: column;
  align-items: left;
  button {
    width: fit-content;
    border: none;
    background-color: white;
    width: 100%;
    &:hover {
        background-color: #E5E5E5;
    }
    padding: 4px 12px 4px 12px;
    text-align: left;
  }
`

const Dropdown = (props) => {
    const [tagState, setTag] = useState(true);
    const tagRef = useRef(null);
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleClickOutside = (e) => {
        if (tagRef.current && !tagRef.current.contains(e.target)) {
        setTag(true);
        }
    };
    return (
        <SearchCondition ref={tagRef} color={props.color} bgcolor={props.bgcolor}>
            <div style={{display: "flex", alignItems: "center"}} onClick={() => {setTag(!tagState)}}> 
                {props.icon}
                <span>{props.title}</span>
            </div>
            <MyTags tagState={tagState}>
                {props.children}
            </MyTags>
        </SearchCondition>
    );
}

export default Dropdown;