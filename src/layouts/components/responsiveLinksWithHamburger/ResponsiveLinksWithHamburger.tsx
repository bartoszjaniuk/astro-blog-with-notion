import { MENU_LINKS } from "@layouts/consts/menuLinks";
import * as React from "react";

type ResponsiveLinksWithHamburgerProps = {
	toggleModal: VoidFunction;
	handleRedirectToActualMagazinePage: VoidFunction;
};

const ResponsiveLinksWithHamburger = ({
	toggleModal,
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

	return (
		<>
			<button className="burger" onClick={toggleButton}>
				<span className={`${isOpen ? "opened" : ""} line`} />
				<span className={`${isOpen ? "opened" : ""} line`} />
				<span className={`${isOpen ? "opened" : ""} line`} />
			</button>
			<div
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
								onClick={(e) => e.preventDefault()}
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
			</div>
		</>
	);
};

export default ResponsiveLinksWithHamburger;
