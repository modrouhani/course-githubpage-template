import "./_css/globals.css";
import { meta } from "../data/meta";

export const metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-dark-dark text-gray-200  mx-auto">{children}</body>
    </html>
  );
}
