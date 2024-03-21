import { PageLayout } from "@shared/pageLayout/PageLayout";

export const PolecamyPage = () => {
	return (
		<PageLayout>
			<main className="container p-4 flex flex-col gap-4">
				<a href="https://www.dentalmedicashow.pl">
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/dentalMedicaShow.jpg"
						alt="Dental Medica Show"
					/>
				</a>

				<a href="acteongroup.com">
					<img
						className="transition duration-300 ease-in-out hover:scale-105"
						src="/assets/polecamy/ACTEON_BANER_PRIME_3D_MARZEC_2024.png"
						alt="Acteon Group"
					/>
				</a>
			</main>
		</PageLayout>
	);
};
