import React from "react";
import Image from "next/image";
import BgImage from "./Public/image.png";
import Logo from "./Public/logo.png";
import CrownBtn from "./Public/01.png";
import TimeLine from "./Public/time.png";
import PlusCircle from "./Public/PlusCircle.png";
import SideBar from "./Public/03.png";
import SidePoster from "./Public/poster.png";
import Carousel from "@/components/carousel";
import UserLogin from "@/components/UserLogin";

const Home = () => {
	return (
		<main className=" h-screen">
			{/* bg image */}
			<div
				className="bg-cover bg-center bg-no-repeat w-full h-full absolute"
				style={{ backgroundImage: `url(${BgImage.src})` }}
			/>

			<div className="relative z-10 h-full">
				{/* navBar */}
				<nav className="w-full h-1/6  container mx-auto">
					<div className="flex items-center justify-between py-5">
						<div className="md:flex gap-x-5 px-5 hidden">
							<Image src={CrownBtn} width={75} height={500} alt="" />
							<div className="self-center relative">
								{/* Container for TimeLine and PlusCircle */}
								<div className="relative">
									{/* TimeLine Image */}
									<Image
										src={TimeLine}
										width={175}
										height={500}
										alt="Timeline"
										className="block"
									/>

									{/* PlusCircle Image (top-right of TimeLine) */}
									<Image
										src={PlusCircle}
										width={30}
										height={50}
										alt="Plus Circle"
										className="absolute top-0 right-0 transform translate-y-[25%] -translate-x-[8%]"
									/>

									{/* Text on top of TimeLine */}
									<h1
										className="absolute inset-0 flex justify-center items-center text-transparent bg-clip-text text-3xl z-10"
										style={{
											backgroundImage: `linear-gradient(to bottom left, #AE5D23 39%, #FFC87F 59%, #B1603C 68%)`,
										}}>
										0.00
									</h1>
								</div>
							</div>
						</div>
						<div className="px-5">
							<Image
								src={Logo}
								width={300}
								height={500}
								alt=""
								className="max-w-[120px] md:max-w-[200px]"
							/>
						</div>
						<div>
							<UserLogin />
						</div>
					</div>
				</nav>

				{/* main body */}
				<div className="container mx-auto">
					<div className="flex mx-1 items-center">
						<div className="p-5 hidden lg:block">
							<Image
								src={SideBar}
								width={250}
								height={500}
								alt=""
								className=" object-contain h-full"
							/>
						</div>
						<div className="">
							<Image
								src={SidePoster}
								width={350}
								height={500}
								alt=""
								className="object-contain h-full max-w-[150px] md:max-w-[350px]"
							/>
						</div>
						<div className="container mx-auto self-center space-y-28 px-2">
							{/* Carousel Wrapper */}
							<Carousel />
							<div className="hidden lg:block">
								<Carousel />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
