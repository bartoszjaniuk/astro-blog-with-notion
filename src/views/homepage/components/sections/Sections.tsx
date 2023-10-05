import { redirectTo } from "src/utils/redirect/redirect";

export const Sections = () => {
	return (
		<section className="bg-softBg border h-full">
			<div
				id="cards-section"
				className="container mx-auto h-auto py-8 lg:h-[500px] items-center grid grid-cols-1 lg:grid-cols-4 gap-8 responsive-padding "
			>
				<div
					onClick={() => redirectTo("o-nas")}
					className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative cursor-pointer"
				>
					<span className="card-background" />
					<div className="flex-col justify-center items-center  flex card-effect">
						<img
							src="/images/homepage/book.svg"
							alt="Katalog"
							className="h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							O czasopiśmie
						</h2>
					</div>
				</div>
				<div className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative">
					<span className="card-background" />
					<div className="flex-col justify-center items-center  flex card-effect">
						<img
							src="/images/homepage/events.svg"
							alt="Wydarzenia"
							className="h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							Wydarzenia
						</h2>
					</div>
				</div>
				<div className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative">
					<span className="card-background" />
					<div className="flex-col justify-center items-center  flex  card-effect">
						<img
							src="/images/homepage/partners.svg"
							alt="Partnerzy"
							className="h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							Partnerzy
						</h2>
					</div>
				</div>

				<div className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative">
					<span className="card-background" />
					<div className="flex-col justify-center items-center  flex  card-effect">
						<img
							src="/images/homepage/writer.svg"
							alt="Polecamy"
							className="h-[150px]"
						/>
						<h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
							Polecamy
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};
