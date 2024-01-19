import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wehoLogo: file(relativePath: { eq: "weho-sourdough-color-1800.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 1600
          )
        }
      }
    }
  `);

  const image = getImage(data.wehoLogo);

  return (
    <header className="sticky top-0 bg-white shadow z-50">
        <div className="w-full">
            <Link to="/">
                <GatsbyImage image={image} alt="Weho Sourdough Logo" className="lg:max-w-4xl mx-auto" />
            </Link>
        </div>
    </header>
  )
};
export default Header;
