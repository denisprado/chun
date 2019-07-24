import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import ReactHtmlParser from 'react-html-parser';

const Home = ({ page }) => (
  <Layout>
    <div className={`row ${page.classes.row}`} key={page.id}>
      <p className={`${page.classes.col.txt}`}>{ReactHtmlParser(page.content)}</p>
      <div className={`${page.classes.col.img}`}>
        <img
          className="hero-image"
          src={`//localhost:3333/${page.photos[0].path}`}
          alt={page.content}
          width="100%"
        />
      </div>
    </div>
  </Layout >
);

Home.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3333/pages/1?_embed=photos`);
  const page = await res.json();

  return { page };
};

export default Home;