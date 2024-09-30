import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="flex items-center justify-center h-screen bg-[#B1603C]">
			<SignUp />;
		</div>
	);
}
