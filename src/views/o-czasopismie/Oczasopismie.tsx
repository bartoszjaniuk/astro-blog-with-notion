import { motion } from "framer-motion";
import { Card } from "./components/card/Card";

export const Oczasopismie = () => {
	return (
		<>
			<div className="container mx-auto responsive-padding grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0 lg:gap-8">
				<div className="lg:col-start-1 lg:col-end-2 lg:pt-24 h-full relative flex flex-col gap-8">
					<h1 className="text-4xl font-bold lg:text-5xl xl:text-7xl ">
						<p>Poznaj nasze </p>
						<p>czasopismo </p>
						<p className="text-primary">stomatologiczne</p>
					</h1>

					<p className="text-xl font-headings pb-10 lg:pb-0">
						„Sprzęt Stomatologiczny” to kwartalnik techniczno-informacyjny,
						który skierowany będzie do profesjonalistów zawodowo związanych z
						branżą stomatologiczną, kadry zarządzającej w klinikach i
						gabinetach. Periodyk przeznaczony będzie dla lekarzy stomatologów
						prowadzących zarówno gabinety, jak i kliniki stomatologiczne oraz
						właścicieli pracowni rentgenowskich, dla protetyków, a także do
						higienistek i asystentek dentystycznych, jak również do wszystkich
						zainteresowanych szeroką tematyką stomatologiczną.
					</p>
				</div>
				<div className="lg:col-start-2 lg:col-end-3 h-[700px] hidden lg:grid  items-end">
					<img
						className="w-[90%] animation-float"
						src="/images/about/about_magazine.svg"
						alt="about"
					/>
				</div>
			</div>
			<div className="bg-primary z-10">
				<div className="container mx-auto responsive-padding grid grid-cols-1 lg:grid-cols-2 py-16 gap-8">
					<div className="lg:col-start-1 lg:col-end-2 relative z-10">
						<span className="bg-shape-white" />
						<motion.img
							className="rounded-lg w-full lg:h-full object-cover"
							src="/images/gabinet.jpg"
							alt="gabinet stomatologiczny"
						/>
					</div>
					<div className="lg:col-start-2 lg:col-end-3 h-full">
						<h3 className="text-white text-3xl lg:text-4xl mb-4 mt-4">
							W czasopiśmie poruszymy tematykę:
						</h3>
						<ul className="list-disc list-inside">
							{dentalFields.map((field, index) => (
								<li
									className="text-white  text-xl lg:text-2xl font-light font-headings"
									key={index}
								>
									{field}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="py-8 lg:py-16 bg-white">
				<div className="container mx-auto responsive-padding flex flex-col gap-3">
					<h3 className="text-4xl  lg:text-5xl text-primary  font-light">
						Czasopismo będzie promowane <br /> na imprezach branżowych w kraju,
						<br /> zarówno w formie elektronicznej jak i drukowanej.
					</h3>
				</div>
			</div>

			<div className=" py-8 relative">
				<div className="video-bg">
					<video className="video-content" muted loop autoPlay>
						<source src="/videos/krakdent.mp4" type="video/mp4" />
						Przeglądarka nie jest wspierana.
					</video>
					<p className="absolute bottom-0 right-0 text-white z-10 text-xs lg:text-base">
						Źródlo: Sztuka stomatologii - KRAKDENT 29. Międzynarodowe Targi
						Stomatologiczne w Krakowie
					</p>
				</div>

				<div className="container mx-auto responsive-padding flex flex-col gap-8 py-8 overflow-hidden">
					{list.map((field, index) => {
						if (index % 2 == 0) {
							return (
								<Card
									isLeft
									key={index}
									text={field.text}
									imagePath={field.imagePath}
									direction="mr-auto"
								/>
							);
						}
						return (
							<Card
								key={index}
								text={field.text}
								imagePath={field.imagePath}
								direction="ml-auto"
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

const dentalFields = [
	"chirurgii stomatologicznej",
	"implantologii",
	"narzędzi dentystycznych",
	"oprogramowania i systemów informatycznych",
	"produktów do gabinetów stomatologicznych",
	"profilaktyki",
	"protetyki",
	"radiologii",
	"wyposażenia i sprzętu do gabinetów",
	"pedodoncji",
	"usług z zakresu stomatologii",
	"kursów, szkoleń, targów",
];

const magazineList = [
	"Czasopismo promowane będzie na imprezach branżowych w kraju, zarówno w formie elektronicznej jak i drukowanej.",
	"Pierwsze wydanie otrzymają uczestnicy 30. Międzynarodowych Targów Dentystycznych „Krakdent” w Krakowie w kwietniu 2024 roku.",
	"Skupimy się na opisie narzędzi, sprzętu i materiałów stomatologicznych oraz na tym, czym kierować się przy ich zakupie i konserwacji.",
	"Na bieżąco zamieszczać będziemy porady z zakresu wyposażenia gabinetów stomatologicznych, skierowane do lekarzy prowadzących praktykę lub zamierzających podjąć wyzwanie związane z uruchomieniem i prowadzeniem działalności lekarsko-dentystycznej.",
	"Będziemy poruszać również tematykę związaną z zasadami i procedurami pracy w gabinecie stomatologicznym.",
	"Czasopismo wydawane będzie głównie w formie elektronicznej, a przy okazji wydarzeń branżowych planowany jest także nakład drukowany.",
	"Uruchomiona już jest strona internetowa www.e-stomatolog.pl, na której zamieszczane będą elektroniczne wydania czasopisma oraz informacje prasowe.",
];

const list = [
	// {
	// 	imagePath: "/images/about/share.svg",
	// 	text: "Czasopismo promowane będzie na imprezach branżowych w kraju, zarówno w formie elektronicznej jak i drukowanej.",
	// },
	{
		imagePath: "/images/about/world.svg",
		text: "Pierwsze wydanie otrzymają uczestnicy 30. Międzynarodowych Targów Dentystycznych „Krakdent” w Krakowie w kwietniu 2024 roku.",
	},
	{
		imagePath: "/images/about/scientist.svg",
		text: "Skupimy się na opisie narzędzi, sprzętu i materiałów stomatologicznych oraz na tym, czym kierować się przy ich zakupie i konserwacji.",
	},
	{
		imagePath: "/images/about/chat.svg",
		text: "Na bieżąco zamieszczać będziemy porady z zakresu wyposażenia gabinetów stomatologicznych, skierowane do lekarzy prowadzących praktykę lub zamierzających podjąć wyzwanie związane z uruchomieniem i prowadzeniem działalności lekarsko-dentystycznej.",
	},
	{
		imagePath: "/images/about/team.svg",
		text: "Będziemy poruszać również tematykę związaną z zasadami i procedurami pracy w gabinecie stomatologicznym.",
	},
	{
		imagePath: "/images/about/conversation.svg",
		text: "Czasopismo wydawane będzie głównie w formie elektronicznej, a przy okazji wydarzeń branżowych planowany jest także nakład drukowany.",
	},
	// {
	// 	imagePath: "/images/about/reminder.svg",
	// 	text: "Uruchomiona już jest strona internetowa www.e-stomatolog.pl, na której zamieszczane będą elektroniczne wydania czasopisma oraz informacje prasowe.",
	// },
];
