import { Icon } from "@iconify/react";
import { ICON_SIZE } from "@layouts/consts/iconSize";

type Entry =
	| {
			type: "normal";
			content: string;
	  }
	| {
			type: "link";
			content: string;
			link: string;
	  }
	| {
			type: "contact";
			icon: "phone" | "mail";
			content: string;
			title?: string;
	  };

export type ColumnProps = {
	heading: string;
	entries: Entry[];
	gridColumn: string;
};

const getColStartAndEnd = (gridColumn: string) => {
	const [start, end] = gridColumn.split("/");
	return { start, end };
};

export const Column = ({ entries, heading, gridColumn }: ColumnProps) => {
	const { start, end } = getColStartAndEnd(gridColumn);
	return (
		<div
			className={`col-start-${start} col-end-${end} flex flex-col gap-2 w-full`}
		>
			<h5 className="text-xl sm:text-lg 2xl:text-2xl font-bold text-start pb-2">
				{heading}
			</h5>
			{entries.map((entry, index) => {
				if (entry.type === "normal")
					return (
						<p
							key={index}
							className="text-md sm:text-base 2xl:text-lg font-thin  text-start"
						>
							{entry.content}
						</p>
					);
				if (entry.type === "link")
					return (
						<a
							key={index}
							className="text-md sm:text-base 2xl:text-lgfont-medium text-start underline"
							href={entry.link}
						>
							{entry.content}
						</a>
					);
				if (entry.type === "contact")
					return (
						<div key={index} className="flex flex-col gap-4 b ">
							{entry.title && (
								<h5 className="text-md sm:text-base 2xl:text-lg font-medium text-start">
									{entry.title}
								</h5>
							)}
							<div key={index} className="flex gap-1 items-center">
								{entry.icon === "phone" && (
									<>
										<p className="text-md sm:text-base 2xl:text-lg">Tel.</p>
										<a
											className="text-md sm:text-base 2xl:text-lg"
											href={`tel${entry.content}`}
										>
											{entry.content}
										</a>
									</>
								)}
								{entry.icon === "mail" && (
									<>
										<p className="text-md sm:text-base 2xl:text-lg">Mail:</p>
										<a
											className="text-md sm:text-base 2xl:text-lg underline"
											href={`tel${entry.content}`}
										>
											{entry.content}
										</a>
									</>
								)}
							</div>
						</div>
					);
			})}
		</div>
	);
};
