import { motion, type Variants } from "framer-motion";
import AnimatedText from "./components/AnimatedText";

type RevealTextProps = {
	placeholderText: {
		text: string;
	}[];
};

export const RevealText = ({ placeholderText }: RevealTextProps) => {
	const variants: Variants = {
		visible: {
			transition: {
				staggerChildren: 0.025,
			},
		},
	};

	return (
		<motion.div initial="hidden" animate="visible" variants={variants}>
			<div className="container leading-[1]">
				{placeholderText.map((item, index) => {
					return <AnimatedText text={item.text} key={index} />;
				})}
			</div>
		</motion.div>
	);
};
