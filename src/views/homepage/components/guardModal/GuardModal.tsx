import { dropIn } from "@shared/animations/modal";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { StorageKeys } from "src/utils/storage/enums/storageKeys.enum";
import { storage } from "src/utils/storage/storage";

const GuardModal = () => {
	const [isProfessionalUser, setIsProfessionalUser] = useState(
		storage.getItem(StorageKeys.PRO_USER),
	);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const user = storage.getItem(StorageKeys.PRO_USER);
		if (user) {
			setIsVisible(true);
			setIsProfessionalUser(user);
		} else {
			setIsVisible(false);
		}
	}, []);
	const toggleVisible = () => setIsVisible((prev) => !prev);

	const handleAccept = () => {
		if (!isProfessionalUser) storage.setItem(StorageKeys.PRO_USER, true);
		toggleVisible();
	};
	const handleReject = () => {
		if (isProfessionalUser) storage.removeItem(StorageKeys.PRO_USER);
		window.history.back();
	};

	useEffect(() => {
		if (!isVisible) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isVisible]);
	return (
		<AnimatePresence>
			{!isProfessionalUser && !isVisible ? (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="overflow-x-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-[1001] h-[500px] lg:h-auto outline-none focus:outline-none lg:flex lg:justify-center w-[80%] lg:items-center"
					>
						<motion.div
							className="w-auto mx-auto max-w-3xl rounded-xl    lg:max-h-max "
							onClick={(e) => e.stopPropagation()}
							variants={dropIn}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
								<div className="relative p-6 flex-auto h-full">
									<div className="bg-white rounded-lg flex flex-col gap-4">
										<p className="text-lg">
											Strona przeznaczona dla specjalistów poszukujących ofert i
											informacji o sprzętach medycznych, wyrobach, technologiach
											oraz materiałach i maszynach do produkcji wyrobów
											medycznych.
										</p>
										<div className="flex flex-col lg:flex-row gap-4 w-full">
											<button
												onClick={handleAccept}
												className="border rounded-lg p-3 bg-primary text-white hover:bg-secondary transition ease-in-out duration-300"
											>
												Rozumiem - wchodzę do serwisu
											</button>

											<button
												onClick={handleReject}
												className="border rounded-lg p-3 bg-red-600 text-white hover:bg-red-500 hover:text-white transition ease-in-out duration-300"
											>
												Nie jestem profesjonalistą - opuszczam serwis
											</button>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
					<div className="opacity-25 fixed inset-0 z-[1000] bg-black"></div>
				</>
			) : null}
		</AnimatePresence>
	);
};

export default GuardModal;
