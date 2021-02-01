import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Gallery = () => {

  const data = useStaticQuery(graphql`
    query {
    imgOne: file(relativePath: { eq: "gallery/1.jpg" }) {
        childImageSharp {
            resize(width: 500, height: 500) {
                src
            }
        }
    }
    imgTwo: file(relativePath: { eq: "gallery/2.jpg" }) {
      childImageSharp {
        resize(width: 500, height: 500) {
            src
        }
      }
    }
    imgThree: file(relativePath: { eq: "gallery/3.jpg" }) {
      childImageSharp {
        resize(width: 500, height: 500) {
            src
        }
      }
    }
    imgFour: file(relativePath: { eq: "gallery/4.jpg" }) {
      childImageSharp {
        resize(width: 500, height: 500) {
            src
        }
      }
    }
    imgFive: file(relativePath: { eq: "gallery/5.jpg" }) {
      childImageSharp {
        resize(width: 500, height: 500) {
            src
        }
      }
    }
    imgSix: file(relativePath: { eq: "gallery/6.jpg" }) {
      childImageSharp {
        resize(width: 500, height: 500) {
            src
        }
      }
    }
}
  `);

  return (
    <div className="mx-4 text-center">
        <h1>Gallery</h1>
        <gallery className="grid grid-cols-3 gap-4">
        <div className="object-fill overflow-hidden h-full">
            <img
            src={data.imgOne.childImageSharp.resize.src}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
            <img
            src={data.imgTwo.childImageSharp.resize.src}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
            <img
            src={data.imgThree.childImageSharp.resize.src}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <img
            src={data.imgFour.childImageSharp.resize.src}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <img
            src={data.imgFive.childImageSharp.resize.src}
            alt="Weho Sourdough Logo"
            />
        </div>
        <div className="object-fill">
        <img
            src={data.imgSix.childImageSharp.resize.src}
            alt="Weho Sourdough Logo"
            />
        </div>
    </gallery>
    </div>
  )
};
export default Gallery;