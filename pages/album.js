import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { server } from "../config";

import { Column } from "../styles/global";

const Albums = ({ albums }) => (
  <Layout>
    <div className="row">
      {albums
        ? albums.map(album => (
            <Link key={album.id} href={`/a/${album.id}`}>
              <Column col={3}>
                <img
                  className="hero-image"
                  src={`${server}/files/${album.Files[0].path}`}
                  alt={album.title}
                  width="90%"
                />
                <p>{album.title}</p>
              </Column>
            </Link>
          ))
        : null}
    </div>
  </Layout>
);

Albums.getInitialProps = async function(context) {
  const res = await fetch(`http://localhost:3333/albums`);
  const albums = await res.json();

  return { albums };
};

export default Albums;
