import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import ReactHtmlParser from 'react-html-parser';

const Home = ({ page }) => (
  <Layout>
    <div className="row" key={page.id}>
      <p className="column">{ReactHtmlParser(page.content)}</p>
      <div className="column">
        {page.image ? page.image.map(image => {
          <img
            className="hero-image"
            src={`//localhost:3333/${image.path}`}
            alt={page.content}
            width="100%"
          />
        }) : null}
      </div>
    </div>
  </Layout >
);

Home.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3333/pages/`);
  const page = await res.json();

  return { page };
};

export default Home;