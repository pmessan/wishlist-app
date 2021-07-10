import Head from 'next/head';
import Image from 'next/image';

const siteTitle = "Danie's Birthday wishlist."
function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Daniela's Birthday Wishlist"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="absolute overflow-auto bg-pattern from-purple-600 to-pink-500 inset-0" id="background">
                {children}
                <footer className="flex items-center justify-center align-bottom text-gray-300">
                    Copyright &copy; {new Date().getFullYear()}
                </footer>
            </div>

        </>
    )
}

export default Layout