import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import ReactHtmlParser from "react-html-parser";
import { server } from "../config";

import { Column } from "../styles/global";

const Home = ({ page }) => (
  <Layout>
    <div className="row">
      <Column col={5}>{ReactHtmlParser(page.content)}</Column>
      <Column col={5}>
        {page.image
          ? page.image.map(image => {
              <img
                className="hero-image"
                src={`${server}/${image.path}`}
                alt={page.content}
                width="100%"
              />;
            })
          : null}
      </Column>
    </div>
  </Layout>
);

Home.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${server}/pages/2`);
  const page = await res.json();

  return { page };
};

export default Home;
