import { Icon } from "@iconify/react/dist/iconify.js";
import { PageLayout } from "@shared/pageLayout/PageLayout";
import Tilt from "react-parallax-tilt";

export const AktualnyNumerPage = () => {
	return (
		<PageLayout>
			<main className="container">
				<div className="flex flex-col md:flex-row gap-8">
					<h1 className="text-5xl font-bold lg:text-5xl xl:text-6xl">
						<p>
							Czytaj <span className="text-primary">pierwszy</span>
						</p>
						<p>
							<span className="text-primary">numer</span> już w
						</p>
						<p>pierwszym kwartale </p>
						<p className="text-primary">2024 roku</p>
					</h1>

					<div className="max-w-[500px]">
						<Tilt transitionSpeed={2000} gyroscope={true}>
							<img
								className="w-full h-auto"
								src="/images/currentNumber/czasopismo-pierwsza-strona.jpg"
								alt="czasopismo-pierwsza-strona"
							/>
						</Tilt>
					</div>
				</div>
			</main>
		</PageLayout>
	);
};
