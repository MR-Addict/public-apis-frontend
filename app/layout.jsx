import "./globals.css";
import { Navbar, Sidebar, Footer } from "../components";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-main-bg min-h-screen w-full'>
        <Navbar />
        <div className='flex flex-row px-[13vw] w-full my-10 gap-10'>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
