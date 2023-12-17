import type { Metadata } from "next";
import Footer from "@components/Footer";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Expanzo",
  description: "Expanzo assesment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
