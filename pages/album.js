import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';

const Albums = ({ albums }) => (
  <>
    <Layout>
      <div className="row">
        <h1>{albums.title}</h1>
        {albums ? albums.map(album =>
          (
            <div className="column" key={album.id}>
              <img
                className="hero-image"
                src={`http://localhost:3333/files/${album.Files[0].path}`}
                alt={album.title}
                width="100%"
              />
              <p>{album.title}</p>
            </div>
          )
        ) : null
        }
      </div>
    </Layout>
  </>
)

Albums.getInitialProps = async function (context) {

  const res = await fetch(`http://localhost:3333/albums`);
  const albums = await res.json();

  return { albums };
};


export default Albums;