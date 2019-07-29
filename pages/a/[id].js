import fetch from "isomorphic-unfetch";
import ReactHtmlParser from "react-html-parser";
import Layout from "../../components/Layout";
import { server } from "../../config";
import AlbumData from "./AlbumData";
import { Column } from "../../styles/global";

const AlbumContainer = ({ album }) => (
  <Layout>
    <div className="row">
      <Column col={3}>{ReactHtmlParser(album.content)}</Column>
    </div>

    <AlbumData albumData={album} />
  </Layout>
);

AlbumContainer.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${server}/albums/${id}`);
  const albums = await res.json();
  const album = albums[0];
  return { album };
};

export default AlbumContainer;
