import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <nav>
          <Link href="">Seller Center</Link>
          <Link href="">Download</Link>
          <Link href="/facebook.com">
            Follow us on <i className="fab fa-facebook"></i>
          </Link>
        </nav>
        <nav>
          <Link href="">Support</Link>
          <Link href="">Register</Link>
          <Link href="">Log in</Link>
        </nav>
      </div>
    </header>
  );
}
