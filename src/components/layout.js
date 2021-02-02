import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="text-text bg-bggray">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="mx-4 text-text">
            {children}
            </div>
            <Footer />
          
        </div>
      )}
    />
  )
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout