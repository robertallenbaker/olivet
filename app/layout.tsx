import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const poppinsSans = Poppins({
	weight: ["200", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

// Grab from Yoast
export const metadata: Metadata = {
	title: "Olivet Baptist Church",
	description: "Baptist Church located in Oklahoma",
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
		apple: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppinsSans.variable} antialiased`}>
				<Header />
				{children}
				Footer
			</body>
		</html>
	);
}
