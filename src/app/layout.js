'use client'

import "./globals.css";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { CookiesProvider } from "react-cookie";

// This is a client-only SPA (auth/state via cookies + localStorage). Gate the
// tree behind a mount check so pages render only on the client, avoiding
// server-prerender crashes from browser-only APIs. The server emits an empty
// shell that hydrates into the full app.
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return children;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          <SessionProvider>
            <ClientOnly>{children}</ClientOnly>
          </SessionProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
