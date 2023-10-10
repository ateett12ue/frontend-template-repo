"use client";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Navbar from "../components/instructionsComponent/navigation/navbar";
import Script from 'next/script';

const config = createConfig(
	getDefaultConfig({
		// Required API Keys
		alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
		walletConnectProjectId: "demo",

		// Required
		appName: "template",

		// Optional
		appDescription: "template Demo",
		appUrl: "https://family.co", // your app's url
		appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
	})
);

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Script
        src="https://unpkg.com/@ryangjchandler/alpine-tooltip@1.2.0/dist/cdn.min.js"
        strategy="lazyOnload"
		crossorigin="anonymous" referrerpolicy="no-referrer"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
			<WagmiConfig config={config}>
				<ConnectKitProvider mode="dark">
					<body>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								minHeight: "105vh",
							}}
						>
							<Navbar />
							<div style={{ flexGrow: 1 }}>{children}</div>
						</div>
					</body>
				</ConnectKitProvider>
			</WagmiConfig>
		</html>
	);
}
