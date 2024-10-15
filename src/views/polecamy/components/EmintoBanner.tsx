export const EmintoBanner = () => {
	return (
		<a
			target="_blank"
			href="https://eminto.tv"
			className="relative max-w-full md:max-w-[688px] lg:max-w-[900px]"
			id="animation_container"
		>
			<canvas
				id="canvas"
				height="148"
				className="absolute block bg-white transition duration-300 ease-in-out hover:scale-105 h-[148px] max-w-[300px] md:max-w-[688px] lg:max-w-[900px]"
			></canvas>
			<div
				id="dom_overlay_container"
				className="pointer-events-none overflow-hidden max-w-900 h-[148px] absolute left-0 top-0 block max-w-[300px] md:max-w-[688px] lg:max-w-[900px]"
			></div>
		</a>
	);
};
