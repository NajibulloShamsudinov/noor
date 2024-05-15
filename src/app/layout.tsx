import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const nunito = Nunito({ subsets: ['latin'] })
export const metadata: Metadata = {
	title: 'noor',
	description: 'noor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<body className={`${nunito.className}`}>
				<Header />
				{children}
				<Footer/>
			</body>
		</html>
	)
}
