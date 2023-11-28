import { newsy } from "./conts/aktualnosci.consts";
import { SingleNews } from "./singleNews/SingleNews";

export const News = () => (
	<main className="container mx-auto responsive-padding min-h-screen flex flex-col gap-4 py-16 h-full">
		<h1 className="text-4xl lg:text-5xl text-primary uppercase font-text py-2">
			Aktualności
		</h1>
		{newsy.map((news, i) => (
			<SingleNews key={i} {...news}>
				<ul className="list-disc px-2">
					{news.content.map((paragraph, i) => (
						<li className="text-primary" key={i}>
							<p className="text-black">{paragraph}</p>
						</li>
					))}
				</ul>
			</SingleNews>
		))}
	</main>
);
