"use client";
import React, { useEffect, useState } from "react";
import SImage from "../app/Public/simage.png";
import Image from "next/image";

const images = [SImage, SImage, SImage, SImage, SImage, SImage, SImage, SImage];

const Carousel = () => {
	const scrollRef = React.useRef<HTMLDivElement | null>(null); // Create a ref for the scrollable div
	const [windowWidth, setWindowWidth] = useState<number>(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth); // Set initial window width

		// Update window width on resize
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Function to handle the mouse wheel scroll event
	const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (scrollRef.current) {
			scrollRef.current.scrollLeft += event.deltaY;
		}
	};
	return (
		<div
			ref={scrollRef}
			onWheel={handleScroll}
			className={`my-6 ${
				windowWidth >= 1024 // Check for desktop size
					? "flex overflow-x-auto scrollbar-hide space-x-4 cursor-pointer"
					: "flex flex-col overflow-y-auto scrollbar-hide space-y-4 items-center" // Vertical scrolling on mobile/tablet
			}`}
			style={{
				height:
					windowWidth >= 1024 ? "auto" : windowWidth >= 640 ? "700px" : "300px",
			}} // Set heights for tablet and mobile
		>
			{images.map((src, index) => (
				<div key={index} className="flex-shrink-0 md:w-10/12 lg:w-[38%] h-auto">
					<Image
						src={src}
						width={600} // Desired width
						height={500} // Desired height
						alt={`carousel-image-${index}`}
						className="bg-white object-contain w-full h-auto" // Ensure the image maintains aspect ratio
					/>
				</div>
			))}
		</div>
	);
};

export default Carousel;
