import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Gallery = () => {

  const data = useStaticQuery(graphql`
    query {
    imgOne: file(relativePath: { eq: "gallery/1.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
        }
    }
    imgTwo: file(relativePath: { eq: "gallery/2.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgThree: file(relativePath: { eq: "gallery/3.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgFour: file(relativePath: { eq: "gallery/4.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgFive: file(relativePath: { eq: "gallery/5.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgSix: file(relativePath: { eq: "gallery/6.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
        }
      }
    }
    imgSeven: file(relativePath: { eq: "gallery/7.jpg" }) {
        childImageSharp {
              fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
          }
        }
      }
      imgEight: file(relativePath: { eq: "gallery/8.jpg" }) {
        childImageSharp {
              fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
          }
        }
      }
      imgNine: file(relativePath: { eq: "gallery/9.jpg" }) {
        childImageSharp {
              fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
          }
        }
      }
      imgTen: file(relativePath: { eq: "gallery/10.jpg" }) {
        childImageSharp {
              fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
          }
        }
      }
      imgEleven: file(relativePath: { eq: "gallery/11.jpg" }) {
        childImageSharp {
              fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwelve: file(relativePath: { eq: "gallery/12.jpg" }) {
        childImageSharp {
              fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
          }
        }
      }
}
  `);

  return (
    <div className="mx-4 mt-8 text-center">
        <Gallery className="grid grid-cols-3 gap-4">
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
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgSeven.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgEight.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgNine.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgTen.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgEleven.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <Img className="rounded-md object-cover h-full"
            fluid={data.imgTwelve.childImageSharp.fluid}
            alt="Weho Sourdough Logo"
            />
        </div>
    </Gallery>
    </div>
  )
};
export default Gallery;