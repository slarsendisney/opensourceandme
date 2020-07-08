import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, title, image, location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage =
    image ||
    "https://ik.imagekit.io/sld/Screenshot_2020-07-09_at_00.14.51_QG1Wu-NebVk.png"
  const url = location
    ? "https://opensourceand.me" + location.pathname
    : "https://opensourceand.me"

  return (
    <Helmet>
      <title>OpenSourceAnd.Me </title>
      <meta name="title" content={`OpenSourceAnd.Me `} />
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`OpenSourceAnd.Me `} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="OpenSourceAnd.Me" />
      <meta name="twitter:title" content={`OpenSourceAnd.Me `} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
      <html lang="en" />
    </Helmet>
  )
}

export default SEO
