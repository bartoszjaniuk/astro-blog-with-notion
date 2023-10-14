import * as React from "react";
import { MENU_LINKS } from "@layouts/consts/menuLinks";
import reklamaPdf from "/assets/reklama-wytyczne.pdf";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type ResponsiveLinksWithHamburgerProps = {
	toggleNewsletter: VoidFunction;
	handleRedirectToActualMagazinePage: VoidFunction;
};

const ResponsiveLinksWithHamburger = ({
	toggleNewsletter,
	handleRedirectToActualMagazinePage,
}: ResponsiveLinksWithHamburgerProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggleButton = () => setIsOpen((prev) => !prev);
	React.useLayoutEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isOpen]);

	const variants: Variants = {
		hidden: {
			x: "300%",

			height: 0,
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
		},
		visible: {
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
			x: 0,
			height: "100vh",
		},
	};

	return (
		<>
			<button className="burger z-50" onClick={toggleButton}>
				<span className={`${isOpen ? "opened" : ""} line`} />
				<span className={`${isOpen ? "opened" : ""} line`} />
				<span className={`${isOpen ? "opened" : ""} line`} />
			</button>
			{/* <div
				className={`${
					isOpen ? "" : "hidden"
				} text-2xl absolute top-[95px] w-full screen-h-navbar bg-white left-0 lg:hidden py-8  flex flex-col gap-10 overflow-y-scroll items-center my-auto`}
			>
				{MENU_LINKS.map((link, index) => {
					if (link.title === "Newsletter") {
						return (
							<a
								className="text-primary font-semibold "
								key={index}
								href={link.path}
								onClick={(e) => {
									e.preventDefault();
									toggleNewsletter();
								}}
							>
								{link.title}
							</a>
						);
					}
					if (link.title === "Aktualny numer") {
						return (
							<a
								className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
								key={index}
								href="/"
								onClick={(e) => {
									e.preventDefault();
									handleRedirectToActualMagazinePage();
									setIsOpen(false);
								}}
							>
								{link.title}
							</a>
						);
					}

					if (link.title === "Reklama") {
						return (
							<a
								className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
								key={index}
								href={reklamaPdf}
								target="_blank"
							>
								{link.title}
							</a>
						);
					}
					return (
						<a
							className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
							key={index}
							href={link.path}
						>
							{link.title}
						</a>
					);
				})}
			</div> */}

			<motion.div
				initial="hidden"
				animate={isOpen ? "visible" : "hidden"}
				variants={variants}
				className="text-2xl absolute top-[95px] w-full bg-white left-0 lg:hidden py-8  flex flex-col gap-10 overflow-y-scroll items-center my-auto"
			>
				{MENU_LINKS.map((link, index) => {
					if (link.title === "Newsletter") {
						return (
							<a
								className="text-primary font-semibold "
								key={index}
								href={link.path}
								onClick={(e) => {
									e.preventDefault();
									toggleNewsletter();
								}}
							>
								{link.title}
							</a>
						);
					}
					if (link.title === "Aktualny numer") {
						return (
							<a
								className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
								key={index}
								href="/"
								onClick={(e) => {
									e.preventDefault();
									handleRedirectToActualMagazinePage();
									setIsOpen(false);
								}}
							>
								{link.title}
							</a>
						);
					}

					if (link.title === "Reklama") {
						return (
							<a
								className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
								key={index}
								href={reklamaPdf}
								target="_blank"
							>
								{link.title}
							</a>
						);
					}
					return (
						<a
							className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
							key={index}
							href={link.path}
						>
							{link.title}
						</a>
					);
				})}
			</motion.div>
		</>
	);
};

export default ResponsiveLinksWithHamburger;
