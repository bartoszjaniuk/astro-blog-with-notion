import type { PropsWithChildren } from "react";

export const Card = ({
	imagePath,
	pathToFile,
	title,
	children,
	date,
}: PropsWithChildren<{
	title: string;
	imagePath: string;
	pathToFile: string;
	date?: string;
}>) => {
	return (
		<div className="w-full h-full lg:h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-navbar rounded-lg flex flex-col lg:flex-row gap-2">
			<div className="w-full ">
				<img
					src={imagePath}
					alt={imagePath}
					className="h-full w-full object-cover rounded-lg"
				/>
			</div>
			<div className="w-full flex flex-col pt-2">
				<h1 className="text-primary font-semibold text-2xl lg:text-3xl px-2 ">
					{title}
				</h1>

				<div className="lg:overflow-y-auto p-2 lg:max-h-[200px]">
					{children}
				</div>
				<div className="flex flex-grow flex-col-reverse lg:flex-row  w-full  justify-between p-2">
					<a
						href={pathToFile}
						target="_blank"
						className="self-end bg-primary text-center text-white active:bg-thirdnary w-full lg:w-44 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-300 disabled:cursor-not-allowed"
						type="button"
					>
						Czytaj więcej
					</a>
					<h5 className="self-end text-lg p-2">{date}</h5>
				</div>
			</div>
		</div>
	);
};
