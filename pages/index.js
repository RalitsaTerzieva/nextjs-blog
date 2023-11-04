import Link from 'next/link';

import 'tailwindcss/tailwind.css'
import NavBar from '../components/Navigation';


function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <p>Explore interesting articles and stories.</p>
      <Link href="/blogs">Go to Blog</Link>
    </div>
  );
}

export default HomePage;
