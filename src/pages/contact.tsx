import React from "react";
import { graphql } from "gatsby";

import Layout from "src/components/layout";
import SEO from "src/components/seo";

interface Props {
  data: any;
  location: any;
}

class ContactPage extends React.Component<Props> {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata;
    const siteTitle = siteMetadata.title;
    return (
      <Layout title={siteTitle}>
        <SEO
          title="Contact Us"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        Contact us
      </Layout>
    );
  }
}

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
