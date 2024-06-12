import { WYDARZENIA } from "./consts/wydarzenia.consts";
import { Card } from "./card/Card";

type Event = {
	title: string;
	slug: string;
	imageUrl: string;
	sourceFile: string;
	description: string;
	date: string;
};

export const WydarzeniaPage = ({ data }: { data: Event[] | [] }) => {
	return (
		<main className="container mx-auto responsive-padding min-h-screen flex flex-col gap-4 py-16 h-full">
			<h1 className="text-4xl lg:text-5xl text-primary uppercase font-light py-2 ">
				Wydarzenia
			</h1>
			{data.length > 0
				? data?.map((wydarzenie, index) => (
						<Card
							imagePath={wydarzenie.imageUrl}
							pathToFile={wydarzenie.sourceFile}
							title={wydarzenie.title}
							key={index}
							children={wydarzenie.description}
							date={wydarzenie.date}
						/>
				  ))
				: WYDARZENIA.map((wydarzenie, index) => (
						<Card {...wydarzenie} key={index} children={wydarzenie.shortDesc} />
				  ))}
		</main>
	);
};
