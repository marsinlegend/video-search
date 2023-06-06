/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.SearchPage';

export default defineMessages({
  searchText: {
    id: `${scope}.searchText`,
    defaultMessage: 'Choose cameras, date & time range',
  },
  searchBtn: {
    id: `${scope}.searchBtn`,
    defaultMessage: 'Search',
  },
  motion: {
    id: `${scope}.motion`,
    defaultMessage: 'Motion',
  },
  person: {
    id: `${scope}.person`,
    defaultMessage: 'Person',
  },
  object: {
    id: `${scope}.object`,
    defaultMessage: 'Object',
  },
  vehicle: {
    id: `${scope}.vehicle`,
    defaultMessage: 'Vehicle',
  },
  characters: {
    id: `${scope}.characters`,
    defaultMessage: 'Characters',
  },
  sensors: {
    id: `${scope}.sensors`,
    defaultMessage: 'Sensors',
  },
  incidents: {
    id: `${scope}.incidents`,
    defaultMessage: 'Incidents',
  },
  geofence: {
    id: `${scope}.geofence`,
    defaultMessage: 'Geofence',
  },
  savedTags: {
    id: `${scope}.savedTags`,
    defaultMessage: 'SAVED TAGS',
  },
});
