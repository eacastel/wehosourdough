import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Button from './button'
import Img from 'gatsby-image'

const Feature = () => {

    const data = useStaticQuery(graphql`
        query {
            imgEleven: file(relativePath: { eq: "front-image.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1800) {
                        ...GatsbyImageSharpFluid
                        }
                }
            }
        }
    `);

    return (
        <div className="text-text">
            
            <div className="text-center mx-4 my-6">
            <h1 className="text-3xl text-brown">Weho Sourdough</h1>
            <p>We bake small batches of sourdough bread in West Hollywood!</p>
            <p><span className="font-bold">Contact us to find out our baking schedule and pre-order a loaf for only $14!</span>  Local pick-up only.</p>
            <Button />
            <Img className="rounded-md"
            fluid={data.imgEleven.childImageSharp.fluid}
            alt="ears on a round loaf of sourdough"
            />
            </div>

        </div>
    )
};
export default Feature;