import Link from 'next/link';

const Menu = () => (
  <>
    <div>
      <Link href="/album">
        <a>Álbum</a>
      </Link>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
      <Link href="/contact">
        <a>Contato</a>
      </Link>
    </div>
    <style jsx>{`
  `}
    </style>
  </>
);

export default Menu;