import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn } from "@shared/animations/modal";

type ModalProps = {
	toggleModal: VoidFunction;
	isModalVisible: boolean;
	title: string;
};

export const Modal = ({
	isModalVisible,
	toggleModal,
	title,
	children,
}: React.PropsWithChildren<ModalProps>) => {
	React.useEffect(() => {
		if (isModalVisible) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isModalVisible]);
	return (
		<AnimatePresence>
			{isModalVisible ? (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{
							opacity: 0,
						}}
						className="overflow-x-hidden top-[106px] mb-10 fixed inset-0 z-50  outline-none focus:outline-none lg:flex lg:justify-center lg:items-center"
					>
						<motion.div
							variants={dropIn}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="w-auto mx-auto max-w-3xl rounded-xl lg:h-full"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-2xl pt-5 pr-5">{title}</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={toggleModal}
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
