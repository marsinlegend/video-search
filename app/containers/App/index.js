/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import LivePage from 'containers/LivePage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin-top: 100px;
  padding: 0 40px;
  /* max-width: 1512px; */
  width: 100%;
  margin-inline: auto;
`;

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <AppWrapper>
        <Switch>
          <Route exact path="/live" component={LivePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/events" component={NotFoundPage} />
          <Route path="/devices" component={NotFoundPage} />
          <Route path="/insights" component={NotFoundPage} />
        </Switch>
      </AppWrapper>
      {/* <Footer /> */}
      <GlobalStyle />
    </div>
  );
}
