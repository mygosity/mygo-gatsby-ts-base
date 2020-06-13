export interface TemplateData {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      excerpt: string;
      html: string;
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    previous: any;
    next: any;
  };
  location: { pathname: string };
  frontmatter: {
    title: string;
    date: string;
  };
}
