import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Menu() {
  const [pages, setPages] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3333/pages');
      const data = await res.json();
      setPages(data)
    }
    fetchData()
  }, []);

  return (
    <>
      <div>
        {console.log(pages)}
        {pages ? pages.map(page => (
          <Link key={page.id} href="/p/[id]" as={`/p/${page.id}`}>
            <a>{page.title}</a>
          </Link>
        )) : null}
        <Link href="/album">
          <a>album</a>
        </Link>
        <Link href="/contact">
          <a>contato</a>
        </Link>
      </div>
      <style jsx>{`
  `}
      </style>
    </>
  );
}

export default Menu;