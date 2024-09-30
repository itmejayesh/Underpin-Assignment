"use client";
import Image from "next/image";
import React from "react";
import Menu from "../app/Public/02.png";
import Menu0 from "../app/Public/ex.png";
import Link from "next/link";
import { useAuth, UserButton, useUser } from "@clerk/nextjs";

const userIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
		/>
	</svg>
);

const crossIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18 18 6M6 6l12 12"
		/>
	</svg>
);

const UserLogin = () => {
	const [open, setOpen] = React.useState(false);
	const { isLoaded, userId } = useAuth();
	const { user } = useUser();

	const handleToggle = () => {
		setOpen((prev) => !prev);
		console.log("im clicked");
	};

	React.useEffect(() => {
		if (open) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		// Clean up the effect
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [open]);

	if (!isLoaded || !userId) {
		return null;
	}

	return (
		<div className="flex gap-x-5 px-5 justify-center items-center">
			{!open ? (
				<Image
					onClick={handleToggle}
					src={Menu}
					width={75}
					height={500}
					alt=""
					className=" size-8 md:size-14 cursor-pointer"
				/>
			) : (
				<Image
					src={Menu0}
					width={75}
					height={500}
					alt=""
					className="size-8 md:size-14"
				/>
			)}

			<div
				className={`fixed inset-0 bg-[#FFC87F]/50 z-10 transition-opacity text-[#251508] font-bold
				duration-300 ease-in-out ${
					open ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}>
				<aside
					className={`fixed top-0 left-0 w-[270px] max-w-xs h-full bg-[#AE5D23] z-50
					  shadow-lg transform transition-transform duration-300 ease-in-out ${
							open ? "translate-x-0" : "-translate-x-full"
						}`}>
					<div className="flex flex-col justify-between items-center p-4">
						<div className="flex justify-between w-full mb-4">
							<div className="flex gap-2">
								{userIcon}
								{!userId ? (
									<h2 className="relative">Login</h2>
								) : (
									<h2>{user?.firstName?.toUpperCase()} WELCOME </h2>
								)}
							</div>
							<button type="button" onClick={handleToggle}>
								{crossIcon}
							</button>
						</div>

						<div className="divide-y divide-[#251508] w-full border-t border-b border-[#251508] mt-4">
							{!userId ? (
								<>
									<Link
										href={`/sign-in`}
										className="grid py-5 tracking-widest hover:bg-[#FFC87F] pl-2">
										Login
									</Link>
									<Link
										href={`/sign-up`}
										className="grid py-5 tracking-widest hover:bg-[#FFC87F] pl-2">
										Sign Up
									</Link>
								</>
							) : (
								<>
									<Link
										href={`/profile`}
										className="grid py-5 tracking-widest hover:bg-[#FFC87F]/20 pl-2">
										Profile
									</Link>
									<Link
										href={`#`}
										className=" flex gap-5 py-5 tracking-widest hover:bg-[#FFC87F]/20 pl-2">
										<UserButton />
										<h1>{user && user.firstName}</h1>
									</Link>
								</>
							)}
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default UserLogin;
