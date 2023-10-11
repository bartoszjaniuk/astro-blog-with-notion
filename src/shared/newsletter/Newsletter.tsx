import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn } from "@shared/animations/modal";

type NewsletterProps = {
	toggleNewsletter: VoidFunction;
	isNewsletterVisible: boolean;
};

export const Newsletter = ({
	isNewsletterVisible,
	toggleNewsletter,
	children,
}: React.PropsWithChildren<NewsletterProps>) => {
	React.useLayoutEffect(() => {
		if (isNewsletterVisible) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isNewsletterVisible]);

	return (
		<AnimatePresence>
			{isNewsletterVisible ? (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="overflow-x-hidden fixed inset-0 z-50  outline-none focus:outline-none lg:flex lg:justify-center lg:items-center"
					>
						<motion.div
							className="w-auto mx-auto max-w-3xl rounded-xl  lg:max-h-max "
							onClick={(e) => e.stopPropagation()}
							variants={dropIn}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-2xl pt-5 pr-5">
										Zapis do <span className=" text-primary">Newslettera</span>
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={toggleNewsletter}
									>
										<span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>

								<div className="relative p-6 flex-auto">{children}</div>
							</div>
						</motion.div>
					</motion.div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</AnimatePresence>
	);
};
