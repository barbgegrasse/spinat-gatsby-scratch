/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import GlobalStyle from '../styles/Global';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [loading, setLoading] = useState(true);

  const checkLoading = () => !loading;

  return (
    <>
      <GlobalStyle />

      <div
        className={loading ? 'main-container open' : 'main-container closed'}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
