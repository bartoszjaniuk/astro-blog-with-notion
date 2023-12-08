import type { PropsWithChildren } from "react";

type PageLayoutProps = {
	title?: string;
};

export const PageLayout = ({
	children,
	title,
}: PropsWithChildren<PageLayoutProps>) => {
	return (
		<main className="container mx-auto responsive-padding min-h-screen flex flex-col gap-4 py-16 h-full">
			{!!title && (
				<h1 className="text-4xl lg:text-5xl text-primary uppercase font-text py-2">
					{title}
				</h1>
			)}
			{children}
		</main>
	);
};
