import { useStaticQuery, graphql } from "gatsby"
export const usePostsImage = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query ImagePostQuery {
        allFile {
          edges {
            node {
              childCloudinaryAsset {
                fluid(maxWidth: 680) {
                  ...CloudinaryAssetFluid
                  ...CloudinaryAssetFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    `
  )
  return allFile.edges
}
