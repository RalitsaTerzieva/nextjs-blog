import Link from 'next/link';

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-3xl text-white font-bold">
         DevDive
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
