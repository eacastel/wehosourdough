import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'



const NotFoundPage = () => {

  const data = useStaticQuery(graphql`
    query {
      crumbsImg: file(relativePath: { eq: "404-image-crumbs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);


  return (
    <Layout>
      <SEO title="404 Not Found" />
      <div className="m-4">
        <h1 className="font-normal text-3xl text-center mt-8">Crumbs! We did not find the page you wanted.</h1>
        <p className="mb-8 mt-0 text-center hover:underline"><Link to="/">Click this link to go to the home page</Link>.</p>
        <Img fluid={data.crumbsImg.childImageSharp.fluid} alt="Image of bread crumbs on cutting board" />
      </div>
    </Layout>
  );
}

export default NotFoundPage
