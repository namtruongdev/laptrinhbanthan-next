import { useStaticQuery, graphql } from "gatsby"
export const useImage = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query ImageQuery {
        allFile {
          edges {
            node {
              childCloudinaryAsset {
                fluid(maxWidth: 600) {
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
