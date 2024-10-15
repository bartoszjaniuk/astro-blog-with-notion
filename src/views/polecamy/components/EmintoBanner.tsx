export const EmintoBanner = () => {
	return (
		<a
			target="_blank"
			href="https://eminto.tv"
			className="w-fit"
			id="animation_container"
		>
			<canvas
				id="canvas"
				width="900"
				height="148"
				className="absolute block bg-white transition duration-300 ease-in-out hover:scale-105 h-[148px] object-cover"
			></canvas>
			<div
				id="dom_overlay_container"
				className="pointer-events-none overflow-hidden w-[900px] h-[148px] absolute left-0 top-0 block"
			></div>
		</a>
	);
};
