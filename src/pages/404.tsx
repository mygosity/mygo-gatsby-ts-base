import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
  data: any;
}

class NotFoundPage extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle} copyrightName={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>Hey this page hasn't been written yet... or it's just not found for whatever reason : (</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
