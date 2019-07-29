import Link from "next/link";
import { Column } from "../../styles/global";

const AlbumItem = ({ albumItem }) => (
  <Link key={albumItem.id} href={`/f/${albumItem.id}`}>
    <Column col={6}>
      <img
        className="hero-image"
        src={albumItem.url}
        alt={albumItem.title}
        width="100%"
      />
    </Column>
  </Link>
);

export default AlbumItem;
