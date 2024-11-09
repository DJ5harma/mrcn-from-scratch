import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import TopNav from "./_components/TopNav";
import Footer from "./_components/Footer";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

export const metadata: Metadata = {
	title: "MRCN-2025 | UIET-KUK",
	description: "MRCN 2025 by UIET Kurukshetra and Springer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased flex flex-col justify-between h-screen">
				<section className="h-20">
					<TopNav />
				</section>
				{children}
				<Footer />
			</body>
		</html>
	);
}
