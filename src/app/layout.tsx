import "./globals.css";
import { APP_NAME } from "@/configs/constant.config";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <head>
                <title>{APP_NAME}</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
