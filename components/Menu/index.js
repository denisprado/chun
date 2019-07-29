import React, { useState, useEffect } from "react";
import Link from "next/link";
import { server } from "../../config";

function Menu() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${server}/pages`);
      const data = await res.json();
      setPages(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {pages
          ? pages.map(page => (
              <Link key={page.id} href="/p/[id]" as={`/p/${page.id}`}>
                <a>{page.title}</a>
              </Link>
            ))
          : null}
        <Link href="/album">
          <a>album</a>
        </Link>
        <Link href="/contact">
          <a>contato</a>
        </Link>
      </div>
    </>
  );
}

export default Menu;
