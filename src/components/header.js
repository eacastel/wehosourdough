import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wehoLogoColor: file(relativePath: { eq: "weho-sourdough-logo-web-final-color-1800.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="sticky top-0 bg-white shadow">
        <div className="w-full">
            <Img
            fluid={data.wehoLogoColor.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
    </header>
  )
};
export default Header;
