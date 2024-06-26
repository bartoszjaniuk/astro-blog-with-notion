import { PageLayout } from "@shared/pageLayout/PageLayout";

export const ArchiwumPage = () => {
	return (
		<PageLayout title="Archiwum">
			{/* <main className="container"> */}
			<div className="h-auto lg:h-[560px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-2 relative flex flex-col gap-4">
				<h1 className="text-3xl lg:text-4xl text-primary text-center font-semibold">
					Rok 2024
				</h1>
				<ul className="list-none flex gap-8">
					<li className="flex flex-col gap-2">
						<a
							href="/wydania/wydanie1.pdf"
							target="_blank"
							className="cursor-pointer"
						>
							<img
								// className="h-[400px]"
								className="w-full h-auto lg:h-[400px]"
								src="/images/currentNumber/wydanie1.png"
								alt="Pierwsza strona wydania 1/2024"
							/>
							<h5 className="font-light text-lg lg:text-2xl text-primary text-center">
								1/2024
							</h5>
						</a>
					</li>
				</ul>
			</div>
			{/* </main> */}
		</PageLayout>
	);
};
