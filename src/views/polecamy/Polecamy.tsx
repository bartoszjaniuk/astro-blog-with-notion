import { PageLayout } from "@shared/pageLayout/PageLayout";

export const PolecamyPage = () => {
	return (
		<PageLayout>
			<main className="container p-4 flex flex-col-reverse gap-4">
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
				<a target="_blank" href="https://ems-poland.com" className="w-fit">
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
				<a target="_blank" href="https://eminto.tv" className="w-fit">
					<img
						width={900}
						className="transition duration-300 ease-in-out hover:scale-105 h-[148px] object-cover"
						src="/assets/polecamy/eminto.png"
						alt="Eminto.tv"
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
						src="/assets/polecamy/optident.png"
						alt="Optident"
					/>
				</a>
			</main>
		</PageLayout>
	);
};
