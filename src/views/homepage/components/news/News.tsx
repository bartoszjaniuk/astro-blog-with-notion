import { Card } from "@views/wydarzenia/card/Card";
import { AKTUALNOSCI } from "./conts/aktualnosci.consts";

export const News = () => (
	<main className="container mx-auto responsive-padding min-h-screen flex flex-col gap-4 py-16 h-full">
		<h1 className="text-4xl lg:text-5xl text-primary uppercase font-light py-2">
			Aktualności
		</h1>
		{AKTUALNOSCI.map((wydarzenie, index) => (
			<Card {...wydarzenie} key={index} />
		))}
	</main>
);
