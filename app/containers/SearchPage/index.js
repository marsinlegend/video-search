import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import CheckTreePicker from './CheckTreePicker';
import DateRangePicker from './DateRangePicker';
import Checkbox from './Checkbox';
import IDropdown from './IDropdown';
import Dropdown from './Dropdown';
import MockData from './MockData';

import H1 from 'components/H1';
import messages from './messages';
import SearchIcon from '../../Icons/Search';
import Tag from '../../Icons/Tag';
import Other from '../../Icons/Other';
import Trash from '../../Icons/Trash';
import Devices from '../../Icons/Devices';
import InputAffix from '../../Icons/InputAffix';
import Calendar from '../../Icons/Calendar';
import Geo from '../../Icons/Routing';
import Story from '../../Icons/Story';
import Person from '../../Icons/UserSearch';
import Object from '../../Icons/BoxSearch';
import Vehicle from '../../Icons/Car';
import Characters from '../../Icons/TextSearch';
import Group9 from '../../Icons/Group9';
import UploadImage from '../../Icons/UploadImage';
import CopyQuery from '../../Icons/CopyQuery';

const SearchBox = styled.div`
  background: #ffffff;
  border: 1px solid #e4e7ec;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  margin-top: 10px;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 25px 40px;
  font-size: 15px;
  justify-content: space-between;
`;

const SearchBtn = styled.button`
  background: #ff6600;
  border-radius: 8px;
  padding: 16px 64px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: #475569;
  justify-content: end;
  select {
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
`;

const TagDropDown = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;
const MyTags = styled.div`
  display: ${({ tagState }) => (tagState ? 'none' : 'flex')};
  flex-direction: column;
  align-items: end;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 4px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  z-index: 99999;
  border-radius: 8px;
`;

const MyTag = styled.div`
  border-radius: 12px;
  border: ${({ color }) => `1px solid ${color}`};
  color: ${({ color }) => color};
  padding: 4px;
  margin: 3px;
  text-align: center;
  width: fit-content;
`;

const SearchOption = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 10px;
  width: 90%;
  left: 5%;
`;

const SearchMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 20px;
  padding: 12px;
  width: 100%;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
`;

const SearchMainWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 65%;
  background: #f9fafb;
  border: 1px solid #e4e7ec;
  box-shadow: 0px 2px 6px rgba(28, 39, 49, 0.08);
  border-radius: 12px;
`;

const IconInSearchMain = styled.div`
  padding: 16px;
`;

const SearchFirst = styled.div`
  display: flex;
  align-items: center;
`;
const SearchSecond = styled.div`
  display: flex;
  align-items: center;
`;
const SearchThird = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SearchLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ced2da;
  border-radius: 52px;
  padding: 8px 10px;
  column-gap: 8px;
`;
const SearchRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const DropdownGeo = styled.div`
  display: flex;
  flex-direction: column;
`;
const SmallDiv = styled.div`
  font-size: 10px;
`;
const MidDiv = styled.div`
  font-size: 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  position: fixed;
  bottom: 65.5px;
  right: 41px;
  column-gap: 30px;
`;
const SaveQueryBtn = styled.button`
  color: #212529;
  border: 1px solid #212529;
  border-radius: 4.8px;
  padding: 8px 16px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #212529;
  background-color: white;
`;
const ApplyBtn = styled.button`
  background: #ff6600;
  padding: 10px 40px;
  border-radius: 8px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;
const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 8px;
  &:hover {
    background-color: #b34700;
  }
  cursor: pointer;
`;
const data = [
  {
    label: 'All Cameras',
    value: 'All Cameras',
    children: [
      {
        label: 'Parking Lot',
        value: 'Parking Lot',
        children: [
          { label: 'Camera 1', value: 'Camera 1' },
          { label: 'Camera 2', value: 'Camera 2' },
          { label: 'Camera 3', value: 'Camera 3' },
          { label: 'Camera 4', value: 'Camera 4' },
        ],
      },
      { label: 'Main Entrance', value: 'Main Entrance', children: [] },
    ],
  },
];

const ConfirmBtn = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: right !important;
  color: #ff6600;
  padding: 18px 16px 8px 16px;
  cursor: pointer;
`;

export default function SearchPage() {
  const [tagState, setTag] = useState(true);
  const tagRef = useRef(null);
  const cameraChange = value => {
    console.log('Valeu: ', value);
    // setCamera([value.value]);
  };
  const dateRangeChange = value => {
    console.log('Valeu: ', value);
    // setCamera([value.value]);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleClickOutside = e => {
    if (tagRef.current && !tagRef.current.contains(e.target)) {
      setTag(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Search Page</title>
        <meta
          name="description"
          content="Search page of React.js Boilerplate application"
        />
      </Helmet>
      <div style={{ paddingTop: 30 }}>
        <SearchBox>
          <div>
            <FormattedMessage {...messages.searchText} />
          </div>
          <SearchBtn>
            <FormattedMessage {...messages.searchBtn} />
            &nbsp;&nbsp;&nbsp;
            <SearchIcon />
          </SearchBtn>
        </SearchBox>
      </div>
      <TagWrapper>
        <TagDropDown ref={tagRef}>
          <div>
            <Tag />
            <span
              onClick={() => {
                setTag(!tagState);
              }}
            >
              {' '}
              <FormattedMessage {...messages.savedTags} />
            </span>
          </div>
          <MyTags tagState={tagState}>
            {MockData.map((mock, index) => {
              return (
                <MyTag color={mock.color} key={`mock-${index}`}>
                  {mock.title}
                </MyTag>
              );
            })}
          </MyTags>
        </TagDropDown>
      </TagWrapper>
      <SearchMainWrapper>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <CopyWrapper>
            <CopyQuery />
          </CopyWrapper>
          <SearchOption>
            <IconInSearchMain>
              <Group9 />
            </IconInSearchMain>
            <SearchMain>
              <SearchFirst>
                <CheckTreePicker
                  defaultExpandAll
                  placeholder="Cameras"
                  data={data}
                  onChange={cameraChange}
                  renderExtraFooter={() => (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'end',
                        borderWidth: '1px 0px',
                        borderStyle: 'solid',
                        borderColor: '#E4E7EC',
                      }}
                    >
                      <ConfirmBtn>Confirm</ConfirmBtn>
                    </div>
                  )}
                />
                <DateRangePicker
                  format="yyyy-MM-dd HH:mm:ss"
                  defaultCalendarValue={[
                    new Date('2023-06-01 00:00:00'),
                    new Date('2023-06-01 23:59:59'),
                  ]}
                  placeholder="Start date & time -> End date & time"
                  onChange={dateRangeChange}
                />
              </SearchFirst>
              <SearchSecond>
                <IDropdown title="Contains">
                  <IDropdown.Item>Contains</IDropdown.Item>
                  <IDropdown.Item>Does Not Contain</IDropdown.Item>
                </IDropdown>
              </SearchSecond>
              <SearchThird>
                <SearchLeft>
                  <Dropdown
                    title={
                      <>
                        <Story />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motion&nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Dropdown.Item>
                      <b>Any</b> Motion Detected
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <b>Fast</b> Motion
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <b>Slow</b> Motion
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <b>Duration</b> of Motion
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <DropdownWrapper>
                        <Geo />
                        &nbsp;&nbsp;&nbsp;
                        <DropdownGeo>
                          <MidDiv>Detect Motion in Area</MidDiv>
                          <SmallDiv>Geofence</SmallDiv>
                        </DropdownGeo>
                      </DropdownWrapper>
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    title={
                      <>
                        <Person />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Person&nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Dropdown.Item>
                      <b>Any</b> Person Detected
                    </Dropdown.Item>
                    <Dropdown.Menu title="Physical Appearance">
                      <Dropdown.Item>Gender</Dropdown.Item>
                      <Dropdown.Item>Age Group</Dropdown.Item>
                      <Dropdown.Item>Clothes</Dropdown.Item>
                      <Dropdown.Item>Accessories</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Menu title="Activity">
                      <Dropdown.Item>Activity</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>
                      <b>Number</b> of People
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <DropdownWrapper>
                        <UploadImage />
                        &nbsp;&nbsp;&nbsp;Upload&nbsp;<b>image</b>
                      </DropdownWrapper>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <DropdownWrapper>
                        <Geo />
                        &nbsp;&nbsp;&nbsp;
                        <DropdownGeo>
                          <MidDiv>Detect People in Area</MidDiv>
                          <SmallDiv>Geofence</SmallDiv>
                        </DropdownGeo>
                      </DropdownWrapper>
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    title={
                      <>
                        <Object />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object&nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Checkbox>Cash</Checkbox>
                    <Checkbox>Mobile</Checkbox>
                    <Checkbox>Earring</Checkbox>
                    <Checkbox>Mask</Checkbox>
                    <Checkbox>Gandana</Checkbox>
                    <Dropdown.Item>
                      <b>Count</b> of Objects
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <b>Color</b> of Objects
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <DropdownWrapper>
                        <Geo />
                        &nbsp;&nbsp;&nbsp;
                        <DropdownGeo>
                          <MidDiv>Detect Objects in Area</MidDiv>
                          <SmallDiv>Geofence</SmallDiv>
                        </DropdownGeo>
                      </DropdownWrapper>
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    title={
                      <>
                        <Vehicle />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vehicle&nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Dropdown.Item>
                      <b>Any</b> Vehicle Detected
                    </Dropdown.Item>
                    <Dropdown.Menu title="Characteristics">
                      <Dropdown.Item>Type of Vehicle</Dropdown.Item>
                      <Dropdown.Item>Color</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>Movement</Dropdown.Item>
                    <Dropdown.Item>
                      <b>License Plate</b>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <b>Number</b> of vehicles
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <DropdownWrapper>
                        <Geo />
                        &nbsp;&nbsp;&nbsp;
                        <DropdownGeo>
                          <MidDiv>Detect Vehicles in Area</MidDiv>
                          <SmallDiv>Geofence</SmallDiv>
                        </DropdownGeo>
                      </DropdownWrapper>
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    title={
                      <>
                        <Characters />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Characters&nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Dropdown.Item>Type Characters</Dropdown.Item>
                    <Dropdown.Item>
                      <DropdownWrapper>
                        <Geo />
                        &nbsp;&nbsp;&nbsp;
                        <DropdownGeo>
                          <MidDiv>Detect Characters in Area</MidDiv>
                          <SmallDiv>Geofence</SmallDiv>
                        </DropdownGeo>
                      </DropdownWrapper>
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    title={
                      <>
                        <Other />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IOT
                        Sensors&nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Dropdown.Item>RFID Sensors</Dropdown.Item>
                    <Dropdown.Item>Smart Light</Dropdown.Item>
                    <Dropdown.Item>Air Monitoring AQI Sensor</Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    title={
                      <>
                        <Other />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incidents&nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Checkbox>Smoke</Checkbox>
                    <Checkbox>Fire</Checkbox>
                    <Checkbox>Flood</Checkbox>
                    <Dropdown.Item>Duration of Event</Dropdown.Item>
                    <Dropdown.Item>Detection Event in Area</Dropdown.Item>
                    <Dropdown.Item>
                      <DropdownWrapper>
                        <Geo />
                        &nbsp;&nbsp;&nbsp;
                        <DropdownGeo>
                          <MidDiv>Detect Event in Area</MidDiv>
                          <SmallDiv>Geofence</SmallDiv>
                        </DropdownGeo>
                      </DropdownWrapper>
                    </Dropdown.Item>
                  </Dropdown>
                </SearchLeft>
                <SearchRight>
                  <Dropdown
                    style={{ backgroundColor: '#414E62' }}
                    title={
                      <>
                        <Geo />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#E4E7EC' }}>Geofence</span>
                        &nbsp;&nbsp;&nbsp;
                      </>
                    }
                  >
                    <Dropdown.Item>Add Area to whole Group</Dropdown.Item>
                    <Dropdown.Item>
                      Add Area to one Detection mode
                    </Dropdown.Item>
                  </Dropdown>
                </SearchRight>
              </SearchThird>
            </SearchMain>
            <IconInSearchMain>
              <Trash />
            </IconInSearchMain>
          </SearchOption>
        </div>
      </SearchMainWrapper>
      <ButtonContainer>
        <SaveQueryBtn>Save this search query</SaveQueryBtn>
        <ApplyBtn>Apply</ApplyBtn>
      </ButtonContainer>
    </div>
  );
}
