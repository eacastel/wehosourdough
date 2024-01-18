import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from '../components/seo'
import Footer from '../components/footer'

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
  query {
    crumbsImg: file(relativePath: { eq: "404-image-crumbs.jpg" }) {
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

const image = getImage(data.crumbsImg);

  return (
    <Layout>
      <SEO title='404 Not Found' />
      <div className='m-4'>
        <h1 className='font-normal text-3xl text-center mt-8'>
          Crumbs! We did not find the page you wanted.
        </h1>
        <p className='mb-8 mt-0 text-center hover:underline'>
          <Link to='/'>Click this link to go to the home page</Link>.
        </p>
        <GatsbyImage image={image}
          alt='Image of bread crumbs on cutting board'
        />
      </div>
      <Footer />
    </Layout>
  )
}

export default NotFoundPage
