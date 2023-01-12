import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Link href="/">
          Home
        </Link>
        <Link href="/posts">
          Posts
        </Link>
        {children}</body>
    </html>
  )
}
