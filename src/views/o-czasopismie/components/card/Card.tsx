import { motion, type Variants } from "framer-motion";

type CardProps = {
	text: string;
	imagePath: string;
	direction: string;
	isLeft?: boolean;
};

export const Card = ({
	text,
	imagePath,
	direction,
	isLeft = false,
}: CardProps) => {
	const cardVariants: Variants = {
		offscreen: {
			x: isLeft ? 400 : -400,
			rotate: -10,
		},
		onscreen: {
			x: 0,
			rotate: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div
				variants={cardVariants}
				className={`w-full lg:w-[1000px] border bg-navbar rounded-lg flex flex-col lg:flex-row gap-4 px-16 py-8 items-center ${direction}`}
			>
				<div className="flex items-center justify-center  p-4">
					<img src={imagePath} alt={imagePath} className="" />
				</div>
				<p className="font-headings text-primary font-extralight text-xl lg:text-3xl flex items-center ">
					{text}
				</p>
			</motion.div>
		</motion.div>
	);
};
