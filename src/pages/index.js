import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import Button from '../components/button'
import Img from 'gatsby-image'
import Gallery from '../components/gallery'


const IndexPage = () => {

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
  const schema =  {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Weho Sourdough",
    "description": "Sourdough bread bakery in West Hollywood, California",
    "image": "https://wehosourdough.com/weho-sourdough-color-1800.png",
    "url": "https://wehosourdough.com",
    "telephone": "‪(323) 963-3322‬",
    }


  return (
    <Layout>
      <SEO title="Home" schemaMarkup={schema} />
      <main>
        <div className="">
          <div className="text-center my-6">
            <h1 className="text-4xl font-normal text-bread mb-4">Weho Sourdough</h1>
            <div className="flex flex-col items-center">
              <div className="w-80 mb-4  text-brown">We bake small batches of sourdough bread in West Hollywood!
              </div>
              <div className="w-80 mb-4"><span className="font-bold">Contact us to find out our baking schedule and pre-order today!</span>
              </div>
            </div>
              <Button />
              <Img className="mt-6 rounded-md border border-brown"
                fluid={data.imgEleven.childImageSharp.fluid}
                alt="ears on a round loaf of sourdough"
              />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
            <h3 className="font-semibold text-xl mb-2">Delicious</h3>
            <p className="mb-2">
            Poetically, we started baking sourdough in 2016 for the beauty of its 3 ingredients: Flour, Water and Salt. Practically, we bake sourdough for its incomparable and irresistible taste.
            </p>
          </div>
          <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
            <h3 className="font-semibold text-xl mb-2">Organic</h3>
            <p className="mb-2">
            We use our own natural leaven cultivated in West Hollywood and make our breads with 100% Organic King Arthur's Flour unless otherwise specified.
            </p>
          </div>
          <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
            <h3 className="font-semibold text-xl mb-2">Artisan</h3>
            <p className="mb-2">
            Each loaf is made to order, carefully processed and baked to crisp perfection! It doesn't get any more "small batch" than this.  
            </p>
          </div>
        </div>
        <Gallery />
      </main>
    </Layout>

    
  )
}

export default IndexPage
