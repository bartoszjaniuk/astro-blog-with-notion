import { motion } from "framer-motion";

type CardProps = {
	title: string;
	imagePath: string;
	shortDesc: string;
	pathToFile: string;
};

export const Card = ({
	imagePath,
	pathToFile,
	shortDesc,
	title,
}: CardProps) => {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div
				// variants={cardVariants}
				className={`w-full border h-full bg-navbar rounded-lg flex flex-col lg:flex-row gap-4 p-2`}
			>
				<div className="w-full lg:min-w-[600px] lg:max-w-[600px]">
					<img src={imagePath} alt={imagePath} className="w-full h-auto" />
				</div>
				<div className="flex flex-col h-ful gap-4 lg:gap-0 lg:justify-around">
					<h5 className="text-primary font-semibold text-xl lg:text-3xl flex items-center">
						{title}
					</h5>
					<p>{shortDesc}</p>
					<a
						href={pathToFile}
						target="_blank"
						className="bg-primary text-center text-white active:bg-thirdnary w-full lg:w-44 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-300 disabled:cursor-not-allowed"
						type="button"
					>
						Czytaj więcej
					</a>
				</div>
			</motion.div>
		</motion.div>
	);
};
