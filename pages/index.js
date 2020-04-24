//Link will make the page render one time without reloading
import Link from "next/Link";

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <Link href='/about'>
      <button>About</button>
    </Link>
    <Link href='/robots'>
      <button>Robots</button>
    </Link>
    {/* <a href='./about'>About</a> */}
  </div>
);

export default Index;
