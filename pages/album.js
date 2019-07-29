import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { server } from "../config";
import { Grid } from "../styles/global";

const Albums = ({ albums }) => (
  <Layout>
    <Grid col={4}>
      {albums
        ? albums.map(album => (
            <Link key={album.id} href={`/a/${album.id}`}>
              <div>
                <img
                  className="hero-image"
                  src={`${server}/files/${album.Files[0].path}`}
                  alt={album.title}
                  width="100%"
                />
                <p>{album.title}</p>
              </div>
            </Link>
          ))
        : null}
    </Grid>
  </Layout>
);

Albums.getInitialProps = async function(context) {
  const res = await fetch(`http://localhost:3333/albums`);
  const albums = await res.json();

  return { albums };
};

export default Albums;
