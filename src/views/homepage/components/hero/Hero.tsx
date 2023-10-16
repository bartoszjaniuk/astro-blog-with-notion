import { Icon } from "@iconify/react";
import { VerticalCarousel } from "../verticalCarousel/VerticalCarousel";
import { RevealText } from "@shared/animations/revealText/RevealText";

const words = [
	"specjalistów",
	"stomatologów",
	"producentów",
	"profesjonalistów",
];

export const Hero = () => {
	return (
		<main className="container pt-14 mx-auto">
			<div
				id="section"
				className="grid grid-cols-1 lg:grid-cols-5 text-center lg:text-left pb-16 responsive-padding gap-4 lg:gap-0 "
			>
				<div className="lg:col-start-1 lg:col-end-3 flex flex-col gap-8 items-start">
					<h1 className="hidden select-none text-transparent">
						Czasopismo Stomatologiczne
					</h1>
					<h1 className="text-2xl font-bold lg:text-5xl xl:text-6xl text-start w-full">
						<RevealText
							placeholderText={[{ text: "Czasopismo Stomatologiczne" }]}
						/>
					</h1>

					<div className="w-full lg:w-[450px]">
						<div className="flex items-center gap-1 ">
							<p className="text-lg lg:text-xl">Strona przeznaczona</p>
							<div className="relative flex text-lg lg:text-xl">
								dla
								<span className="block select-none text-transparent">
									specjalistów
								</span>
								<VerticalCarousel words={words} />
							</div>
						</div>
						<p className="hidden select-none text-transparent">
							poszukujących ofert i informacji o sprzęcie stomatologicznym,
							wyrobach oraz materiałach, a także o tym czym kierować się przy
							ich wyborze.
						</p>
						<div className="text-lg lg:text-xl text-start">
							<RevealText
								placeholderText={[
									{
										text: "poszukujących ofert i informacji o sprzęcie",
									},
									{
										text: "stomatologicznym, wyrobach oraz materiałach, a także o tym czym kierować się",
									},
									{
										text: "przy ich wyborze.",
									},
								]}
							/>
						</div>
					</div>
					<button className="bg-primary hover:bg-secondary text-white  py-2 rounded w-fit px-6 flex gap-2">
						Sprawdź juz teraz
						<Icon
							width={20}
							icon="mdi:arrow-right"
							className="text-white text-center h-full"
						/>
					</button>
				</div>
				<div className="lg:col-start-3 lg:col-end-6 relative flex justify-start lg:justify-end">
					<span className="bg-shape left-0 lg:left-[5%]" />
					<img
						className="w-[95%] relative border-fancy bg-black"
						src="/images/dentist-2.jpg"
						alt="Lekarz oraz lekarka"
					/>
				</div>
			</div>
		</main>
	);
};
