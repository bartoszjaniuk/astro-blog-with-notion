import { MENU_LINKS } from "@layouts/consts/menuLinks";
import ResponsiveLinksWithHamburger from "../responsiveLinksWithHamburger/ResponsiveLinksWithHamburger";

const Navbar = () => {
	return (
		<nav className="container responsive-padding mx-auto  h-24  flex items-center justify-between">
			{/* <div className="social">
				<button>
					<Icon
						width={ICON_SIZE}
						icon="mdi:facebook"
						className="hover:text-primary"
					/>
				</button>
				<button>
					<Icon
						width={ICON_SIZE}
						icon="mdi:instagram"
						className="hover:text-primary"
					/>
				</button>
			</div> */}
			<div className="logo text-primary font-headings font-bold">
				Czasopismo Stomatologiczne
			</div>
			<ResponsiveLinksWithHamburger />
			<div className="links">
				{MENU_LINKS.map((link, index) => {
					if (link.title === "Newsletter") {
						return (
							<a
								className="text-primary font-semibold md:text-base"
								key={index}
								href={link.path}
								onClick={(e) => e.preventDefault()}
							>
								{link.title}
							</a>
						);
					}
					return (
						<a
							className="relative text-xl md:text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap	"
							key={index}
							href={link.path}
						>
							{link.title}
						</a>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
