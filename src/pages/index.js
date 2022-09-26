import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import Button from '../components/button'
import Img from 'gatsby-image'
import Gallery from '../components/gallery'
import Footer from '../components/footer'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      imgEleven: file(relativePath: { eq: "front-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Weho Sourdough',
    description: 'Sourdough bread bakery in West Hollywood, California',
    image: 'https://wehosourdough.com/weho-sourdough-color-1800.png',
    url: 'https://wehosourdough.com',
    telephone: '‪(323) 963-3322‬',
  }

  return (
    <Layout>
      <SEO
        title='Weho Sourdough - Sourdough bread in West Hollywood, California'
        schemaMarkup={schema}
      />
      <main>
        <div className='text-center my-6'>
          <div className='items-center md:flex md:flex-row'>
            <div className='max-w-xs mx-auto mb-4 text-brown md:text-left'>
              <h1 className='text-4xl font-normal text-bread  mb-4'>
                Thank you!
              </h1>
              <p>We had a great run but we moved!</p>
              <p className='py-4'>
                <span className='font-bold'>
                  If you are interested in purchasing the logo and URL they are for sale! <br />orders@wehosourdough.com
                </span>
              </p>
              
            </div>
            <div className='md:w-1/2 h-full'>
              <Img
                className='mt-6 rounded-md shadow-md md:mr-8'
                fluid={data.imgEleven.childImageSharp.fluid}
                alt='ears on a round loaf of sourdough'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row pt-4 '>
          <div className='lg:flex-grow md:w-1/3 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white'>
            <h3 className='font-semibold text-xl mb-2'>Delicious</h3>
            <p className='mb-2'>
              Poetically, we started baking sourdough in 2016 for the beauty of
              its 3 ingredients: Flour, Water and Salt. Practically, we bake
              sourdough for its incomparable and irresistible taste.
            </p>
          </div>
          <div className='lg:flex-grow  md:w-1/3 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white'>
            <h3 className='font-semibold text-xl mb-2'>Organic</h3>
            <p className='mb-2'>
              We use our own natural leaven cultivated in West Hollywood and
              make our breads with 100% Organic King Arthur's Flour unless
              otherwise specified.
            </p> 
          </div>
          <div className='lg:flex-grow  md:w-1/3 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white'>
            <h3 className='font-semibold text-xl mb-2'>Artisan</h3>
            <p className='mb-2'>
              Each loaf is made to order, carefully processed and baked to crisp
              perfection! It doesn't get any more "small batch" than this.
            </p>
          </div>
        </div>
        <Gallery />
      </main>
      <Footer />
    </Layout>
  )
}

export default IndexPage
