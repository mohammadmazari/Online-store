import "./globals.css";
import danaFont from "fonts/DanaFont";
import Layout from "layout/layout";
export const metadata = {
  title: "فروشگاه اینترنتی دیری شاپ",
  icons: { icon: "/brand/icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fn" dir="rtl" className={danaFont.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
