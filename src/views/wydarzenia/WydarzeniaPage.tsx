import React from "react";
import { WYDARZENIA } from "./consts/wydarzenia.consts";
import { Card } from "./card/Card";

export const WydarzeniaPage = () => {
	return (
		<main className="container mx-auto responsive-padding min-h-screen flex flex-col gap-4 py-16 h-full">
			<h1 className="text-4xl lg:text-5xl text-primary uppercase font-light py-2 ">
				Wydarzenia
			</h1>
			{WYDARZENIA.map((wydarzenie, index) => (
				<Card {...wydarzenie} key={index} />
			))}
		</main>
	);
};
