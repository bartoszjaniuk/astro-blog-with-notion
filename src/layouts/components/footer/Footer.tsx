import React from "react";
import { Column, type ColumnProps } from "./components/column/Column";

const FOOTER_ADDRESS: ColumnProps = {
	heading: "Adres",
	gridColumn: "1/2",
	entries: [
		{
			type: "normal",
			content: "Media Tech s.c. E. Majewska, K. Mazur",
		},
		{
			type: "normal",
			content: "ul. Żorska 1/45",
		},
		{
			type: "normal",
			content: "47-400 Racibórz",
		},
	],
};

const FOOTER_CONTACT: ColumnProps = {
	heading: "Kontakt",
	gridColumn: "2/3",
	entries: [
		{
			type: "contact",
			icon: "phone",
			content: "32-733 18 01",
		},
		{
			type: "contact",
			icon: "mail",
			content: "redakcja@sprzetstomatologiczny.pl",
		},
		{
			type: "contact",
			icon: "phone",
			content: "+ 48 797 125 417",
		},
		{
			type: "contact",
			icon: "mail",
			content: "katarzynamazur@sprzetstomatologiczny.pl",
		},
	],
};

const FOOTER_ABOUT: ColumnProps = {
	heading: "O tym się mówi",
	gridColumn: "3/4",
	entries: [
		{
			type: "link",
			content: "Wydarzenia branżowe",
			link: "/wydarzenia-branzowe",
		},
		{
			type: "link",
			content: "Polecamy",
			link: "/polecamy",
		},
		{
			type: "link",
			content: "Aktualny numer",
			link: "/aktualny-numer",
		},
	],
};

const Footer = () => {
	return (
		<footer className="w-full bg-primary text-white h-full ">
			<div className="container mx-auto h-full primary-selection">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-8 responsive-padding">
					<Column {...FOOTER_ADDRESS} />
					<Column {...FOOTER_CONTACT} />
					<Column {...FOOTER_ABOUT} />
				</div>
			</div>
			<div className="w-full bg-white text-primary lg:h-16 flex lg:items-center py-4">
				<div className="container mx-auto responsive-padding flex flex-col lg:flex-row lg:items-center justify-between gap-2">
					<h5 className="text-xl sm:text-base 2xl:text-2xl font-light">
						© 2022 Czasopismo Stomatologiczne
					</h5>
					<div className="flex flex-col lg:flex-row text-xl sm:text-base 2xl:text-2xl  font-light font-headings gap-2 h-full ">
						<a className=" lg:border-r-2 lg:pr-2" href="/">
							Regulamin i RODO
						</a>
						<a href="/cookies">Polityka prywatności i cookies</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
