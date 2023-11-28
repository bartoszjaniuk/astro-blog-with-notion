const NotFoundPage = () => {
	return (
		<main className="container mx-auto responsive-padding flex flex-col items-center justify-center gap-4 lg:gap-16 py-8 h-full">
			<div className="flex flex-col items-center justify-center w-full lg:w-auto">
				<p className="font-headings text-2xl lg:text-3xl">Już wkrótce</p>
			</div>
			<img
				// className="h-full lg:h-[800px]"
				className="h-full lg:h-[400px]"
				src="/images/notFound/search.svg"
				alt="Człowiek patrzący przez lunete"
			/>
		</main>
	);
};

export default NotFoundPage;
