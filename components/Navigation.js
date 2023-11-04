import Link from 'next/link';

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="container mx-auto">
        <Link href="/" className="text-3xl text-white font-bold">DevDive</Link>
      </div>
      <Link href="/blogs">
        <button className="btn btn-info w-64 rounded-full text-white">Blogs</button>
      </Link>
    </nav>
  );
}

export default NavBar;
