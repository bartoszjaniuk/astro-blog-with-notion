import { useLayoutEffect, type PropsWithChildren } from "react";

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
}: PropsWithChildren<ModalProps>) => {
	useLayoutEffect(() => {
		if (isModalVisible) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isModalVisible]);
	return (
		<>
			{isModalVisible ? (
				<>
					<div className="overflow-x-hidden fixed inset-0 z-50  outline-none focus:outline-none lg:flex lg:justify-center lg:items-center">
						<div
							className="relative w-auto mx-auto max-w-3xl rounded-xl  lg:max-h-max "
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
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
