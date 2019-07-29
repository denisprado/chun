import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

const File = ({ file }) => (
  <Layout>
    <div className="row">
      {file ? (
        <div className="column" col={8}>
          <img
            className="hero-image"
            src={file.url}
            alt={file.name}
            width="100%"
          />
        </div>
      ) : null}
    </div>
  </Layout>
);

File.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3333/files/${id}`);
  const files = await res.json();
  const file = files[0];
  return { file };
};

export default File;
