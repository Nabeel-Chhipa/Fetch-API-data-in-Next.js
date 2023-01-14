import NavBar from "./nav-bar"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        {children}</body>
    </html>
  )
}
