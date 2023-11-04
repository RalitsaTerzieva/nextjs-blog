import Link from 'next/link';

import 'tailwindcss/tailwind.css'


function HomePage() {
  return (
    <div>
      <h1 className="text-3xl text-gray-700 font-bold bg-amber-100 ">Welcome to My Blog</h1>
      <p>Explore interesting articles and stories.</p>
      <Link href="/blogs">Go to Blog</Link>
    </div>
  );
}

export default HomePage;
