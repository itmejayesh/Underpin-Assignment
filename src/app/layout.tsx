import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import "./globals.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					<ClerkLoading>
						<div className="flex items-center justify-center h-screen text-2xl">
							LOADING....
						</div>
					</ClerkLoading>
					<ClerkLoaded>{children}</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	);
}
