import { PageLayout } from "@shared/pageLayout/PageLayout";

export const PolecamyPage = () => {
	return (
		<PageLayout>
			<main className="container p-4 flex flex-col gap-4">
				<a target="_blank" href="https://www.dentalmedicashow.pl">
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/dentalMedicaShow.jpg"
						alt="Dental Medica Show"
					/>
				</a>

				<a target="_blank" href="https://www.acteongroup.com/pl/">
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/ACTEON_BANER_PRIME_3D_MARZEC_2024.png"
						alt="Acteon Group"
					/>
				</a>

				<a target="_blank" href="https://expo-andre.pl/expodent/">
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/expodent_2024.jpg"
						alt="ExpoDent 2024"
					/>
				</a>
				<a target="_blank" href="https://cede.pl">
					<img
						width={900}
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/cede_2024.gif"
						alt="Cede"
					/>
				</a>
			</main>
		</PageLayout>
	);
};
