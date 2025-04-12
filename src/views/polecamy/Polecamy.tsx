import { PageLayout } from "@shared/pageLayout/PageLayout";
import { EmintoBanner } from "./components/EmintoBanner";

export const PolecamyPage = () => {
	return (
		<PageLayout>
			<main className="container p-4 flex flex-col-reverse gap-4 relative">
				<a
					target="_blank"
					href="https://www.dentalmedicashow.pl"
					className="w-fit"
				>
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/dentalMedicaShow.jpg"
						alt="Dental Medica Show"
					/>
				</a>

				<a
					target="_blank"
					href="https://www.acteongroup.com/pl/"
					className="w-fit"
				>
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/ACTEON_BANER_PRIME_3D_MARZEC_2024.png"
						alt="Acteon Group"
					/>
				</a>

				<a
					target="_blank"
					href="https://expo-andre.pl/expodent/"
					className="w-fit"
				>
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/expodent_2024.jpg"
						alt="ExpoDent 2024"
					/>
				</a>
				<a target="_blank" href="https://cede.pl" className="w-fit">
					<img
						width={900}
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/cede_2024.gif"
						alt="Cede"
					/>
				</a>
				<a
					target="_blank"
					href="https://emsdent.com/rewolucja-w-profilaktyce"
					className="w-fit"
				>
					<img
						width={900}
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/emsPoland.jpg"
						alt="EMS Poland"
					/>
				</a>
				<a target="_blank" href="https://straumann.com" className="w-fit">
					<img
						width={900}
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/straumann.jpg"
						alt="Straumann Sirios"
					/>
				</a>

				<a
					target="_blank"
					href="https://optident.pl/oferta/skaner-shining-3d-aoralscan-elite/"
					className="w-fit"
				>
					<img
						width={900}
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/optident.jpg"
						alt="Optident"
					/>
				</a>
				<EmintoBanner />
				<a
					target="_blank"
					href="https://makromed.com.pl/produkty/?producent=560"
					className="w-fit"
				>
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/banner-owandy3.png"
						alt="Banner Markomed"
					/>
				</a>
				<a target="_blank" href="https://denteq.pl/">
					<video
						className="transition duration-300 ease-in-out hover:scale-105"
						muted
						loop
						autoPlay
					>
						<source src="/videos/DENTEQbaner.mp4" type="video/mp4" />
						Przeglądarka nie jest wspierana.
					</video>
				</a>

				<a target="_blank" href="www.3z.pl" className="w-fit">
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/3z.png"
						alt="3z.pl"
					/>
				</a>

				<a
					target="_blank"
					href="https://mikran.pl/pl/id3916/Skaner-wewnatrzustny-Runyes-3DS-V3-PRO"
					className="w-fit"
				>
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/mikran.jpg"
						alt="Mikran - Skaner wewnątrzustny Runyes 3DS V3 PRO"
					/>
				</a>

				<a target="_blank" href="https://www.scharf.pl/" className="w-fit">
					<img
						className="lg:min-w-[900px] transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/scharf.png"
						alt="Scharf - narzędzia stomatologiczne i chirurgiczne"
					/>
				</a>
			</main>
		</PageLayout>
	);
};
