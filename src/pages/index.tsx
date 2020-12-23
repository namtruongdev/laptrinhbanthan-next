import React, { ReactElement } from 'react';

// import SEO from "../components/seo"
import Layout from '../components/Layout';
import Header from '../components/Header';
// const Article = loadable(() => import('../components/Articles'));

const IndexPage = ({ location }): ReactElement => {
  type slogan = string[];
  const strings: slogan = [
    "LẬP TRÌNH <span style='font-weight: 400'>BÀN CHÂN</span>",
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ];

  return (
    <>
      <Layout>
        <Header strings={strings} />
        <main id="main" className="main">
          {/* <Article data={data} /> */}
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
