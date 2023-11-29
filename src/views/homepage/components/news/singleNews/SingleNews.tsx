import * as React from "react";

type SingleNewsProps = {
	title: string;
	pathToFile: string;
	imagePath: string;
};

export const SingleNews = ({
	title,
	imagePath,
	pathToFile,
	children,
}: React.PropsWithChildren<SingleNewsProps>) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-7 bg-navbar rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] h-full  lg:h-[350px] w-full">
			<div className="h-[350px] lg:full col-start-1 row-start-2 row-end-4 lg:col-end-1 lg:row-span-full">
				<img
					src={imagePath}
					alt={imagePath}
					className="h-full w-full object-cover"
				/>
			</div>
			<h5 className="px-4 py-4 col-start-1 row-start-1 row-end-2 lg:col-start-2 lg:row-start-1 lg:row-end-3 bg-primary text-white lg:bg-white lg:text-primary font-semibold text-2xl lg:text-2xl flex items-center">
				{title}
			</h5>
			<div className="px-4 py-3 col-start-1 row-start-4 row-end-6 lg:col-start-2 lg:row-start-3 lg:row-end-7 lg:overflow-y-scroll">
				{children}
			</div>
			<div className="col-start-1 row-start-6 row-end-7 flex w-full lg:px-4 lg:col-start-2 lg:row-start-8 lg:grid lg:items-end pb-4">
				<a
					href={pathToFile}
					target="_blank"
					className=" bg-primary text-center text-white active:bg-thirdnary w-full lg:w-44 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-300 disabled:cursor-not-allowed"
					type="button"
				>
					Czytaj więcej
				</a>
			</div>
		</div>
	);
};
