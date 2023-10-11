import { MENU_LINKS } from "@layouts/consts/menuLinks";
import ResponsiveLinksWithHamburger from "../responsiveLinksWithHamburger/ResponsiveLinksWithHamburger";
import { Modal } from "src/shared/modal/Modal";
import React, { useState } from "react";
import { Form } from "@views/aktualny-numer/Form";
import { StorageKeys } from "src/utils/storage/enums/storageKeys.enum";
import { Newsletter } from "@shared/newsletter/Newsletter";
import { NewsletterForm } from "@shared/newsletter/components/newsletterForm/NewsletterForm";
import reklamaPdf from "/assets/reklama-wytyczne.pdf";

const Navbar = () => {
	const [isModalVisible, setModalVisible] = React.useState(false);
	const toggleModal = () => setModalVisible((prev) => !prev);

	const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
	const toggleNewsletter = () => setIsNewsletterVisible((prev) => !prev);

	const handleRedirectToActualMagazinePage = () => {
		if (!localStorage.getItem(StorageKeys.VERIFY_USER)) return toggleModal();
		const url = window.location.href;
		location.assign(`${url}/aktualny-numer`);
	};

	return (
		<>
			<div className="bg-white w-full fixed z-50">
				<nav className="container responsive-padding mx-auto  h-24  flex items-center justify-around">
					<div className="logo text-primary font-headings font-bold w-full">
						Czasopismo Stomatologiczne
					</div>
					<ResponsiveLinksWithHamburger
						toggleNewsletter={toggleNewsletter}
						handleRedirectToActualMagazinePage={
							handleRedirectToActualMagazinePage
						}
					/>
					<div className="links">
						{MENU_LINKS.map((link, index) => {
							if (link.title === "Newsletter") {
								return (
									<a
										className="text-primary font-semibold md:text-base"
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
							if (link.title === "Reklama") {
								return (
									<a
										className="relative text-xl md:text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap	"
										key={index}
										href={reklamaPdf}
										target="_blank"
									>
										{link.title}
									</a>
								);
							}

							if (link.title === "Aktualny numer") {
								return (
									<a
										className="relative text-xl md:text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap	"
										key={index}
										href="/"
										onClick={(e) => {
											e.preventDefault();
											handleRedirectToActualMagazinePage();
										}}
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
			</div>
			<Modal
				isModalVisible={isModalVisible}
				toggleModal={toggleModal}
				title="Aktualny numer - wersja elektroniczna"
			>
				<Form toggleModal={toggleModal} />
			</Modal>
			<Newsletter
				isNewsletterVisible={isNewsletterVisible}
				toggleNewsletter={toggleNewsletter}
			>
				<NewsletterForm toggleNewsletter={toggleNewsletter} />
			</Newsletter>
		</>
	);
};

export default Navbar;
