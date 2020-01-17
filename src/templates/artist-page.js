import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

export const ArtistPageTemplate = ({ title }) => {
  return (
    <section className="section section--gradient">
      <h1 className="title is-size-1 has-text-weight-bold is-bold-light">
        {title}
      </h1>
    </section>
  );  
};

ArtistPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const ArtistPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArtistPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ArtistPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ArtistPage;

export const artistPageQuery = graphql`
  query ArtistPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
