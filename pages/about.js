import Link from "next/Link";
import Image from "../components/Image";

const About = () => {
  return (
    <div style={{ fontSize: "20px", color: "blue" }}>
      <h1>About</h1>
      <Link href='/'>
        <button>Back</button>
      </Link>
      <Image />
      <p>I was a Next.js magician</p>
    </div>
  );
};

export default About;
