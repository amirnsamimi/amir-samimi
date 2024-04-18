import type { Metadata } from "next";
import {  Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amir Samimi",
  description: "29th years passed after the day born, developing web, providing tech solutions, cosulting and implementing services and micro-services in businesses to achive level of success. I'm a Front-end engineer with business strategy knowladge and skills in ReactJS, NextJS, NodeJS, Tailwind CSS, Sass, CSS, HTML, JS ( JAVASCRIPT ES6+ ), FIGMA, MUI, TYPESCRIPT, AXIOS, ReduxJS familiar to EJS, PANDAS, PHP, STATISTICS, PYTHON,	Matplotlib, NumPy, Scikit-Learn, SciPy and etc.  ",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}><main>{children}</main></body>
    </html>
  );
}
