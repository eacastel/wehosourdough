import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Gallery = () => {

  const data = useStaticQuery(graphql`
    query {
    imgOne: file(relativePath: { eq: "gallery/1.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
        }
    }
    imgTwo: file(relativePath: { eq: "gallery/2.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgThree: file(relativePath: { eq: "gallery/3.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgFour: file(relativePath: { eq: "gallery/4.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgFive: file(relativePath: { eq: "gallery/5.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgSix: file(relativePath: { eq: "gallery/6.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
        }
      }
    }
}
  `);

  return (
    <div className="mx-4 text-center">
        <h1>Gallery</h1>
        <gallery className="grid grid-cols-3 gap-4">
        <div className="object-fill">
            <Img className="rounded-md object-cover h-full"
            fluid={data.imgOne.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
            <Img className="rounded-md object-cover h-full"
            fluid={data.imgTwo.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
            <Img className="rounded-md object-cover h-full"
            fluid={data.imgThree.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgFour.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgFive.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgSix.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
    </gallery>
    </div>
  )
};
export default Gallery;