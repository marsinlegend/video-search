/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LivePage';

export default defineMessages({
  note: {
    id: `${scope}.note`,
    defaultMessage: 'Note:',
  },
  warning: {
    id: `${scope}.warning`,
    defaultMessage: 'The Live View Cameras have 4-5 seconds lag.',
  },
  liveView: {
    id: `${scope}.liveView`,
    defaultMessage: `Live View`,
  },
  allCameras: {
    id: `${scope}.allCameras`,
    defaultMessage: 'All Cameras',
  },
  onlineState: {
    id: `${scope}.onlineState`,
    defaultMessage: 'Include offline cameras',
  },
  customWall: {
    id: `${scope}.customWall`,
    defaultMessage: 'Custom Wall',
  },
  view: {
    id: `${scope}.view`,
    defaultMessage: 'View:',
  },
  sortby: {
    id: `${scope}.sortby`,
    defaultMessage: 'Sort by: ',
  },
  makeClip: {
    id: `${scope}.makeClip`,
    defaultMessage: 'Make a Clip: ',
  },
  searchRecording: {
    id: `${scope}.searchRecording`,
    defaultMessage: 'Search Recordings of this camera: ',
  },
});
