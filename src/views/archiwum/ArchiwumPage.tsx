import { PageLayout } from "@shared/pageLayout/PageLayout";

const WYDANIA_2024 = [
	{
		title: "1/2024",
		href: "/wydania/wydanie1.pdf",
		alt: "Pierwsza strona wydania 1/2024",
		src: "/images/currentNumber/wydanie1.png",
	},
	{
		title: "2/2024",
		href: "/wydania/wydanie2.pdf",
		alt: "Pierwsza strona wydania 2/2024",
		src: "/images/currentNumber/wydanie2.png",
	},
	{
		title: "3/2024",
		href: "/wydania/wydanie3.pdf",
		alt: "Pierwsza strona wydania 3/2024",
		src: "/images/currentNumber/wydanie3.png",
	},
];

const WYDANIA_2025 = [
	{
		title: "1/2025",
		href: "/wydania/wydanie4.pdf",
		alt: "Pierwsza strona wydania 1/2025",
		src: "/images/currentNumber/wydanie4.png",
	},
];

const Wydanie = ({
	title,
	alt,
	src,
	href,
}: {
	title: string;
	alt: string;
	src: string;
	href: string;
}) => (
	<li className="flex flex-col">
		<a
			href={href}
			target="_blank"
			className="cursor-pointer flex flex-col gap-8 xl:gap-2"
		>
			<img className="w-full h-auto xl:h-[400px]" src={src} alt={alt} />
			<h5 className="font-light text-4xl md:text-5xl lg:text-4xl text-primary text-center">
				{title}
			</h5>
		</a>
	</li>
);

export const ArchiwumPage = () => {
	return (
		<PageLayout title="Archiwum">
			{/* <main className="container"> */}
			<div className="h-auto xl:h-[560px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-2 relative flex flex-col gap-4">
				<h1 className="text-5xl lg:text-4xl xl:text-6xl text-primary text-center font-semibold">
					Rok 2025
				</h1>
				<div className="xl:px-16">
					<ul className="flex list-none flex-col xl:flex-row gap-4">
						{WYDANIA_2025.map((wydanie) => (
							<Wydanie key={wydanie.title} {...wydanie} />
						))}
					</ul>
				</div>
			</div>
			<div className="h-auto xl:h-[560px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-2 relative flex flex-col gap-4">
				<h1 className="text-5xl lg:text-4xl xl:text-6xl text-primary text-center font-semibold">
					Rok 2024
				</h1>
				<div className="xl:px-16">
					<ul className="flex list-none flex-col xl:flex-row justify-between">
						{WYDANIA_2024.map((wydanie) => (
							<Wydanie key={wydanie.title} {...wydanie} />
						))}
					</ul>
				</div>
			</div>

			{/* </main> */}
		</PageLayout>
	);
};
