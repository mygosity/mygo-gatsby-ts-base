import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";

import Layout from "src/components/layout";
import SEO from "src/components/seo";
import { maxNavLength } from "src/constants";

interface Props {
  data: any;
  location: any;
}

class MainIndex extends React.Component<Props> {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata;
    const siteTitle = siteMetadata.title;
    return (
      <Layout title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div
          css={css`
            @media (max-width: ${maxNavLength}px) {
              width: 92vw;
            }
          `}
        >
          <h2
            css={css`
              font-weight: 500;
              text-align: center;
            `}
          >
            Welcome
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </Layout>
    );
  }
}

export default MainIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
