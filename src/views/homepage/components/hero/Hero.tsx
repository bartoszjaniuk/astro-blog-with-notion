import { Icon } from "@iconify/react";

export const Hero = () => {
	return (
		<main className="container pt-14 mx-auto ">
			<div
				id="section"
				className="grid grid-cols-1 lg:grid-cols-5 text-center lg:text-left pb-16 responsive-padding gap-4 lg:gap-0 "
			>
				<div className="lg:col-start-1 lg:col-end-3 flex flex-col gap-8 items-center lg:items-start">
					<h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
						Czasopismo Stomatologiczne
					</h1>
					<p className="text-lg lg:text-xl">
						Odkryj najnowsze <span className="text-primary">innowacje</span>{" "}
						<br />w świecie maszyn
						<span className="text-primary"> stomatologii</span>.
					</p>
					<button className="bg-primary hover:bg-secondary text-white  py-2 rounded w-fit px-6 flex gap-2">
						Sprawdź juz teraz
						<Icon
							width={20}
							icon="mdi:arrow-right"
							className="text-white text-center h-full"
						/>
					</button>
				</div>
				<div className="lg:col-start-3 lg:col-end-6 relative flex justify-end">
					<span className="bg-shape" />
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
