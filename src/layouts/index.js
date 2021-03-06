import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import { withPrefix } from 'gatsby-link'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title}>
      <link rel="shortcut icon" href={'/favicon.png'} />
    </Helmet>
    <Header />
    <main>
      {children()}
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
