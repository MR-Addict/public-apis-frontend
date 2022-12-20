import "./globals.css";
import { Navbar, Sidebar, Footer } from "../components";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navbar />
        <div className='flex flex-col md:flex-row mx-5 md:mx-48 my-5 md:my-10 gap-5'>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
