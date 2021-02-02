import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wehoLogo: file(relativePath: { eq: "weho-sourdough-color-1800.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="sticky top-0 bg-white shadow z-50">
        <div className="w-full">
            <Link to="/">
                <Img fluid={data.wehoLogo.childImageSharp.fluid} alt="Weho Sourdough Logo" className="lg:max-w-4xl mx-auto" />
            </Link>
        </div>
    </header>
  )
};
export default Header;
