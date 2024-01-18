import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import Button from '../components/button'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Gallery from '../components/gallery'
import Footer from '../components/footer'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      imgEleven: file(relativePath: { eq: "front-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 2500
          )
        }
      }
    }
  `);

  const image = getImage(data.imgEleven);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Weho Sourdough',
    description: 'Pan artesanal de masa madre sourdough en Valencia, España.',
    image: 'https://wehosourdough.com/weho-sourdough-color-1800.png',
    url: 'https://wehosourdough.com',
    telephone: '(323) 963-3322',
  }

  return (
    <Layout>
      <SEO
        title='Weho Sourdough - Pan tipo sourdough de masa madre en Valencia, España'
        schemaMarkup={schema}
      />
      <main>
        <div className='text-center my-6'>
          <div className='items-center md:flex md:flex-row'>
            <div className='max-w-xs mx-auto mb-4 text-brown md:text-left'>
              <h1 className='text-4xl font-normal text-bread  mb-4'>
                Weho Sourdough
              </h1>
              <p>¡Horneamos pan artesanal tipo sourdough de masa madre en Valencia!</p>
              <p className='py-4'>
                <span className='font-bold'>
                 Haz tu pedido hoy y prepárate para disfrutar este fabuloso pan preparado y horneado especialmente para tí como si tu lo hicieses en casa!
                </span>
              </p>
              <Button />
            </div>
            <div className='md:w-1/2 h-full'>
            <GatsbyImage image={image}  className='mt-6 rounded-md shadow-md md:mr-8'
                alt='ears on a round loaf of sourdough'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row pt-4 '>
          <div className='lg:flex-grow md:w-1/3 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white'>
            <h3 className='font-semibold text-xl mb-2'>Delicioso</h3>
            <p className='mb-2'>
            Iniciamos en 2016 por la sublime combinación de solo 3 ingredientes: agua, harina y sal. Hoy, seguimos haciendo este pan por su incomparable e irresistible sabor.
            </p>
          </div>
          <div className='lg:flex-grow  md:w-1/3 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white'>
            <h3 className='font-semibold text-xl mb-2'>Natural</h3>
            <p className='mb-2'>
            Nuestra levadura natural se cultiva en magnífico clima de Valencia y de la Sierra Calderona. Elaboramos nuestros panes con harinas naturales y de la mejor calidad.
            </p>
          </div>
          <div className='lg:flex-grow  md:w-1/3 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white'>
            <h3 className='font-semibold text-xl mb-2'>Artesanal</h3>
            <p className='mb-2'>
            Elaboramos cada pan a mano y unicamente bajo pedido. Lo fermentamos al menos 12 horas. Después lo horneamos hasta que quede dorado y crujiente.
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
