// next
import type { Metadata } from "next";
// mocks
import { _MetaData } from "@_mocks/layout";
// components
import ReactQueryProvider from "@provider/ReactQueryProvider";
import ScrollToTopWrapper from "@components/ui/layout/ScrollToTopWrapper";
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

        {/* noindex, nofollow */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />

        {/* favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        
        {/* font */}
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
      </head>

      <body>
        <ReactQueryProvider>
          <ScrollToTopWrapper>
            {children}
          </ScrollToTopWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
