import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const VerticalCarousel = ({ words }: { words: string[] }) => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) =>
				prevIndex === words.length - 1 ? 0 : prevIndex + 1,
			);
		}, 2000);

		// Clear interval on unmount
		return () => clearInterval(interval);
	}, [words, setCurrentWordIndex]);

	return (
		<AnimatePresence initial={false}>
			<motion.p
				className="absolute text-primary opacity-0 left-8 top-0 font-bold font-headings"
				key={currentWordIndex}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.5 }}
			>
				{words[currentWordIndex]}
			</motion.p>
		</AnimatePresence>
	);
};
