import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
const Index = props => (
  <>
    <Layout>
      {props.index
        ? props.index.map(page => (
            <div className="hero-container" key={page.id}>
              <h1 className="hero-text">{page.content}</h1>
              <img
                className="hero-image"
                src={"//localhost:3333/" + page.image}
                alt={page.content}
                width="60%"
              />
            </div>
          ))
        : null}
    </Layout>

    <style jsx>
      {`
        .hero-container {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .hero-text {
          flex-grow: 4;
          margin-right: 15px;
          font-size: 72px;
          font-weight: 100;
        }
        .hero-image {
          flex-grow: 1;
          border: 10px solid #fff;
        }
      `}
    </style>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:3333/pages?title=index");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    index: data.map(entry => entry)
  };
};

export default Index;
