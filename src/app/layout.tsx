import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import './app.css'
import localFont from 'next/font/local'
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";
 
// Font files can be colocated inside of `pages`
const alpino = localFont({ src: '../../public/font/Alpino-Variable.woff2' ,weight:'100 900', display:'swap',variable:'--font-alpino'})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={alpino.variable} lang="en">
      <body className="overflow-x-hidden bg-yellow-300">
        <Header/>
        <main>
        {children}
        <ViewCanvas/>
        </main>
        <Footer/>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
