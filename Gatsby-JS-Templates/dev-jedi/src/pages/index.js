import { Link , graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home() {
  
//  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={ styles.header }>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Dev, Technical Writer and Freelancer</p>
          <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
        </div>
        <img src="/banner.svg" alt="site banner"  style = {{maxWidth:'100%'}}/>
        {/* <GatsbyImage image={image} alt="Banner" /> */}
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query Banner {
//     file(relativePath: {eq: "banner.png"}) {
//       childImageSharp {
//         gatsbyImageData(
//           layout: FULL_WIDTH
//           placeholder: BLURRED
//           formats: [AUTO, WEBP]
//           )
//       }
//     }
//   }
// `



//The commented sections of this page are to dynamically render images using graphql but
//here since we have used svg image for the banner we can import it from static files.
//I've kept them as comment for future references.