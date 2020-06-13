import React from "react";
import { graphql } from "gatsby";

import Layout from "src/components/layout";
import SEO from "src/components/seo";

interface Props {
  data: any;
  location: any;
}

class MainIndex extends React.Component<Props> {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata;
    const siteTitle = siteMetadata.title;
    return (
      <Layout title={siteTitle} copyrightName={siteTitle}>
        <SEO
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        About
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
