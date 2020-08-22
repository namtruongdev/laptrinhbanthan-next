import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  metaImage,
  metaType,
  pathname,
  schema,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            keywords
            twitter
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const image = metaImage ? metaImage : null
  const type = metaType ? metaType : "website"

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}/` : null

  const metaSchema = schema
    ? schema
    : {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        name: "Lập Trình Bản Thân",
        alternateName: "LTBT",
        url: "https://laptrinhbanthan.com/",
        description: site.siteMetadata.description,
        logo:
          "https://res.cloudinary.com/alerthumg/image/upload/v1597849622/laptrinhbanthan/images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "0961103310",
          contactType: "technical support",
          contactOption: "TollFree",
          areaServed: "VN",
          availableLanguage: "Vietnamese",
        },
        sameAs: [
          "https://www.facebook.com/laptrinhbanthandotcom/",
          "https://duongnamtruong.com",
        ],
      }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: `preconnect`,
          href: `https://res.cloudinary.com`,
          crossOrigin: `anonymous`,
        },
      ].concat(
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      )}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },

        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `fb:app_id`,
          content: `174766196750045`,
        },
        {
          property: `og:locale`,
          content: `vi_VN`,
        },
        {
          property: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: 1200,
                },
                {
                  property: "og:image:height",
                  content: 630,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(
          metaType
            ? [
                {
                  property: `article:author`,
                  content: `https://www.facebook.com/truongduongg99`,
                },
                {
                  property: `article:publisher`,
                  content: `https://www.facebook.com/108704720678153`,
                },
              ]
            : []
        )

        .concat(meta)}
    >
      {<script type="application/ld+json">{JSON.stringify(metaSchema)}</script>}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `vi`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
