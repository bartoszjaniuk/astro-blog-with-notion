import { type PropsWithChildren } from "react";
import { motion, type Variants } from "framer-motion";

const Wrapper = (props: PropsWithChildren) => {
	return <span className="whitespace-nowrap">{props.children}</span>;
};

type AnimatedCharactersProps = {
	text: string;
};

const AnimatedCharacters = ({ text }: AnimatedCharactersProps) => {
	const variatns: Variants = {
		hidden: {
			y: "200%",
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
		},
		visible: {
			y: 0,
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
		},
	};

	const splitWordsIntoLetters = (text: string) => {
		return text.split(" ").map((word) => [...word, "\u00A0"]);
	};
	const words = splitWordsIntoLetters(text);

	return (
		<>
			{words.map((word, index) => {
				return (
					<Wrapper key={index}>
						{word.map((letter, index) => {
							return (
								<span className="overflow-hidden inline-block pb-1" key={index}>
									<motion.span className="inline-block " variants={variatns}>
										{letter}
									</motion.span>
								</span>
							);
						})}
					</Wrapper>
				);
			})}
		</>
	);
};

export default AnimatedCharacters;
