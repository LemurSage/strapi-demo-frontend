import RQProvider from "@/components/rq-provider";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <RQProvider>
      <html>
        <body className="bg-white text-black">{children}</body>
      </html>
    </RQProvider>
  );
}
