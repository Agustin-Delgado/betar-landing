import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In The News – Betar US: Zionist Movement of Ze’ev Jabotinsky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}