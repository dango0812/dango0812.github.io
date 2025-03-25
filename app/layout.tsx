// next
import type { Metadata } from "next";
// mocks
import { _MetaData } from "@_mocks/layout";
// components
import ReactQueryProvider from "@provider/ReactQueryProvider";
// styles
import "@styles/globals.css";

export const metadata: Metadata = {
  title: _MetaData.title,
  description: _MetaData.description
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="ko">
      <head>
        {/* author */}
        <meta name="author" content={_MetaData.author} />

        {/* seo */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />

        {/* font */}
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
      </head>

      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
