"use client";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { redirectTo } from "src/utils/redirect/redirect";

export const Sections = () => {
	const cardVariants: Variants = {
		offscreen: {
			y: 100,
			rotate: -10,
		},
		onscreen: {
			y: 0,
			rotate: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	return (
		<motion.section className="bg-softBg border h-full overflow-y-hidden">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				id="cards-section"
				className="container mx-auto h-full py-16 lg:h-[500px] items-center grid grid-cols-1 lg:grid-cols-4 gap-8 responsive-padding "
			>
				<motion.div
					variants={cardVariants}
					onClick={() => redirectTo("o-czasopismie")}
					className="h-[200px] lg:h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative cursor-pointer"
				>
					<span className="card-background" />
					<div className="flex-col justify-center items-center flex card-effect">
						<img
							src="/images/homepage/book.svg"
							alt="Katalog"
							className="h-[130px] lg:h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							O czasopiśmie
						</h2>
					</div>
				</motion.div>
				<motion.div
					onClick={() => redirectTo("wydarzenia-branzowe")}
					variants={cardVariants}
					className="cursor-pointer h-[200px] lg:h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative"
				>
					<span className="card-background" />
					<div className="flex-col justify-center items-center  flex card-effect">
						<img
							src="/images/homepage/events.svg"
							alt="Wydarzenia"
							className="h-[130px] lg:h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							Wydarzenia
						</h2>
					</div>
				</motion.div>
				<motion.div
					variants={cardVariants}
					className="h-[200px] lg:h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative"
				>
					<span className="card-background" />
					<div className="flex-col justify-center items-center  flex  card-effect">
						<img
							src="/images/homepage/partners.svg"
							alt="Partnerzy"
							className="h-[130px] lg:h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							Partnerzy
						</h2>
					</div>
				</motion.div>

				<motion.div
					variants={cardVariants}
					className="h-[200px] lg:h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative"
				>
					<span className="card-background" />
					<div className="flex-col justify-center items-center  flex  card-effect">
						<img
							src="/images/homepage/writer.svg"
							alt="Polecamy"
							className="h-[130px] lg:h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							Polecamy
						</h2>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};
