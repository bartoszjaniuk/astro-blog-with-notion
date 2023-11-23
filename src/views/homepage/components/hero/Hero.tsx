import { Icon } from "@iconify/react";
import { VerticalCarousel } from "../verticalCarousel/VerticalCarousel";
import { RevealText } from "@shared/animations/revealText/RevealText";

const words = ["specjalistów", "stomatologów", "producentów"];

export const Hero = () => {
	return (
		<main className="container pt-14 mx-auto">
			<div
				id="section"
				className="grid grid-cols-1 lg:grid-cols-5 text-center lg:text-left pb-16 responsive-padding gap-4 lg:gap-4"
			>
				<div className="lg:col-start-1 lg:col-end-3 flex flex-col gap-8 items-start">
					<div className="relative">
						<img
							src="/assets/logo-2.png"
							className="w-full"
							alt="Sprzęt Stomatologiczny Logo"
						/>
						<div className="absolute bottom-[-1.3rem] left-0 uppercase font-headings text-lg">
							Czasopismo Stomatologiczne
						</div>
					</div>

					<div className="w-full lg:w-[400px]">
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
							ich wyborze. Czytaj najnowszy numer już w pierwszym kwartale 2024.
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

					<button className="group w-full md:w-fit transition-all duration-300 ease-in-out border-2 border-primary  text-primary hover:bg-primary hover:text-white rounded flex py-3 px-5 text-start ">
						<div className="text-2xl md:text-2xl md:text-start font-text font-medium tracking-wide">
							<p className="font-semibold">Czytaj najnowszy numer</p>
							<p className="font-semibold">już w pierwszym kwartale</p>
							<div className="flex items-center gap-2 ">
								<span className="font-semibold">2024</span>
								<Icon
									width={30}
									icon="mdi:arrow-right"
									className="text-primary transition-all duration-300 ease-in-out text-center h-full group-hover:text-white group-hover:rotate-180"
								/>
							</div>
						</div>
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
