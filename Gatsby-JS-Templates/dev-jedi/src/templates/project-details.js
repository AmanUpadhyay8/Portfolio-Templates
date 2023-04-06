import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import * as styles from '../styles/project-details.modules.css'


export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg} = data.markdownRemark.frontmatter

  return (
    <Layout>
        <div className={styles.details}>
            <h2>{ title }</h2>
            <h3>{ stack }</h3>
            <div className={styles.featured}>
            <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured image" />
            </div>
            <div  className={styles.html}     dangerouslySetInnerHTML={{ __html: html}}           />
        </div>
    </Layout>
  )
}


export const query = graphql`
  query ProjectPageVariables($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`