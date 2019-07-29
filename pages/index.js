import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import ReactHtmlParser from "react-html-parser";
import { Column } from "./styles";
const Home = ({ page }) => (
  <Layout>
    <div className="row" key={page.id}>
      <Column col={2}>{ReactHtmlParser(page.content)}</Column>
      <Column col={6}>
        {page.image
          ? page.image.map(image => {
              <img
                className="hero-image"
                src={`//localhost:3333/${image.path}`}
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
  const res = await fetch(`http://localhost:3333/pages/2`);
  const page = await res.json();

  return { page };
};

export default Home;
