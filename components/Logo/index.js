import Link from "next/link";

const Logo = () => (
  <>
    <div>
      <Link href="/">
        <a>
          <strong>CHUN</strong> FOTOGRAFIA
        </a>
      </Link>
    </div>
    <style jsx>
      {`
        a {
          font-size: 24px;
        }
      `}
    </style>
  </>
);

export default Logo;
