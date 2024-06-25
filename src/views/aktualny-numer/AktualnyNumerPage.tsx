import { PageLayout } from "@shared/pageLayout/PageLayout";
import Tilt from "react-parallax-tilt";

export const AktualnyNumerPage = () => {
	return (
		<PageLayout>
			<main className="container">
				<div className="flex flex-col gap-8 justify-center items-center">
					<a
						className="max-w-[700px]"
						href="/wydania/wydanie1.pdf"
						target="_blank"
					>
						<Tilt transitionSpeed={2000} gyroscope={true}>
							<img
								className="w-full h-auto"
								src="/images/currentNumber/wydanie2.png"
								alt="czasopismo-pierwsza-strona"
							/>
						</Tilt>
					</a>
					<a
						className="text-primary text-2xl font-bold lg:text-5xl xl:text-6xl underline"
						href="/wydania/wydanie2.pdf"
						target="_blank"
					>
						Kliknij tutaj, aby wyświetlić czasopismo
					</a>
				</div>
			</main>
		</PageLayout>
	);
};
