
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import Warn from './Warn';
import LiveView from './LiveView';

import messages from './messages';

export default function LivePage() {
  return (
    <div>
      <Helmet>
        <title>Live Page</title>
        <meta
          name="description"
          content="Live page of React.js Boilerplate application"
        />
      </Helmet>
      <Warn />
      <LiveView />
    </div>
  );
}
