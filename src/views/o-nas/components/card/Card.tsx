import { Icon } from "@iconify/react";

type CardProps = {
	text: string;
	imagePath: string;
	direction: string;
};

export const Card = ({ text, imagePath, direction }: CardProps) => {
	return (
		<div
			className={`w-[1000px] border bg-navbar rounded-lg flex gap-4 px-16 py-8 items-center ${direction}`}
		>
			<div className="flex items-center justify-center  p-4">
				<img src={imagePath} alt={imagePath} className="" />
			</div>
			<p className="font-headings text-primary font-extralight text-3xl flex items-center ">
				{text}
			</p>
		</div>
	);
};
