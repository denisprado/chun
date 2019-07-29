import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import ReactHtmlParser from "react-html-parser";
import { Column } from "./styles";

const Page = ({ page }) => (
  <Layout>
    <div className="row">
      <Column col={2}>{ReactHtmlParser(page.content)}</Column>
      <Column col={6}>
        <img
          className="hero-image"
          src={page.image.url}
          alt={page.content}
          width="100%"
        />
      </Column>
    </div>
  </Layout>
);

Page.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3333/pages/${id}`);
  const pages = await res.json();
  const page = pages[0];
  return { page };
};

export default Page;
