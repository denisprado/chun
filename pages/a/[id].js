import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import { Column } from "./styles";
const Album = ({ album }) => (
  <Layout>
    <div className="row">
      <Column col={3}>{ReactHtmlParser(album.content)}</Column>
    </div>
    <div className="row">
      {album.Files
        ? album.Files.map(photo => (
            <Link key={album.id} href={`/f/${photo.id}`}>
              <Column col={8}>
                <img
                  className="hero-image"
                  src={photo.url}
                  alt={album.content}
                  width="100%"
                />
              </Column>
            </Link>
          ))
        : null}
    </div>
  </Layout>
);

Album.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3333/albums/${id}`);
  const albums = await res.json();
  const album = albums[0];
  return { album };
};

export default Album;
