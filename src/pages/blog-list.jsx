import React from "react";
import SEO from "../common/seo";
import BlogList from "../components/blog-list";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"iResponsive Solutions"} />
      <BlogList />
    </Wrapper>
  );
};

export default index;
