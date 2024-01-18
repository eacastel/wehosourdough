import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "gallery/1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgTwo: file(relativePath: { eq: "gallery/2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgThree: file(relativePath: { eq: "gallery/3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgFour: file(relativePath: { eq: "gallery/4.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgFive: file(relativePath: { eq: "gallery/5.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgSix: file(relativePath: { eq: "gallery/6.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgSeven: file(relativePath: { eq: "gallery/7.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgEight: file(relativePath: { eq: "gallery/8.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgNine: file(relativePath: { eq: "gallery/9.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgTen: file(relativePath: { eq: "gallery/10.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgEleven: file(relativePath: { eq: "gallery/11.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
      imgTwelve: file(relativePath: { eq: "gallery/12.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 600
          )
        }
      }
    }
  `);

  return (
    <div className="mx-4 mt-8 text-center">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => {
          const imgKey = `img${index + 1}`;
          const image = getImage(data[imgKey]);

          return (
            <div key={imgKey} className="object-fill">
              <GatsbyImage
                className="rounded-md object-cover h-full"
                image={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
