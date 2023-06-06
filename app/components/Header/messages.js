/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  live: {
    id: `${scope}.live`,
    defaultMessage: 'Live',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
  events: {
    id: `${scope}.events`,
    defaultMessage: 'Events',
  },
  devices: {
    id: `${scope}.devices`,
    defaultMessage: 'Devices',
  },
  insights: {
    id: `${scope}.insights`,
    defaultMessage: 'Insights',
  },
  help: {
    id: `${scope}.help`,
    defaultMessage: 'help',
  },
});
