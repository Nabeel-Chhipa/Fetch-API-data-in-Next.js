import Link from 'next/Link';

const navBar = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </>
  );
};

export default navBar;
