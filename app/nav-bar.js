'use client'
import Link from 'next/Link';

const navBar = () => {
  return (
      
      <>
      <style jsx>
        {`
            .navWrapper {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}
      </style>
    <nav className='navWrapper'>
      <Link href="/" style={{margin: '0px 10px', color: '#000', textDecoration: 'none'}}>Home</Link>
      <Link href="/posts" style={{margin: '0px 10px', color: '#000', textDecoration: 'none'}}>Posts</Link>
    </nav>
    </>
  );
};

export default navBar;
