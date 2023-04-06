const path = require('path')

exports.createPages = async ({ graphql , actions}) =>{

    const { data } = await graphql(`
        query ProjectSiteGenerator {
            allMarkdownRemark {
            nodes {
                frontmatter {
                slug
                }
            }
            }
        }
      
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path : '/projects/' + node.frontmatter.slug,
            component : path.resolve('./src/templates/project-details.js'),
            context : { slug : node.frontmatter.slug}
        })
    })

}