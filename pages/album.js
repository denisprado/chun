import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';

const Albums = ({ albums }) => (
  <>
    <Layout>
      <div className="row">
        {console.log(albums)}
        {albums ? albums.map(album =>
          (

            <div className="column" key={album.id}>

              <img
                className="hero-image"
                src={`//localhost:3333/${album.photos[0].path}`}
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

  const res = await fetch(`http://localhost:3333/albums?_embed=photos`);
  const albums = await res.json();

  return { albums };
};


export default Albums;