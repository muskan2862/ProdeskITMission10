import "./globals.css";
import ReduxProvider from "../providers/ReduxProvider";

export const metadata = {
  title: "Sprint 10 Redux Store",
  description: "Next.js Redux Toolkit Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}