import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { StorageKeys } from "src/utils/storage/enums/storageKeys.enum";
import { BaseModal } from "../baseModal/BaseModal";

export const GuardModal = () => {
	const [cookies, setCookie, removeCookie] = useCookies([StorageKeys.PRO_USER]);
	const [isProfessionalUser, setIsProfessionalUser] = useState(
		cookies.isProfessionalUser,
	);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const user = cookies.isProfessionalUser;
		if (!user) {
			setIsOpen(true);
		}
	}, []);

	const handleAccept = () => {
		const expirationDate = new Date();
		expirationDate.setMonth(expirationDate.getMonth() + 1);
		setCookie(StorageKeys.PRO_USER, true, { expires: expirationDate });
		setIsOpen(false);
		setIsProfessionalUser(true);
	};

	const handleReject = () => {
		removeCookie(StorageKeys.PRO_USER);
		window.history.back();
	};

	return (
		<BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
			<p className="text-lg mb-4">
				Strona przeznaczona dla specjalistów poszukujących ofert...
			</p>
			<div className="flex flex-col lg:flex-row gap-4 w-full">
				<button
					onClick={handleAccept}
					className="border rounded-lg p-3 bg-primary text-white hover:bg-secondary"
				>
					Rozumiem - wchodzę
				</button>
				<button
					onClick={handleReject}
					className="border rounded-lg p-3 bg-red-600 text-white hover:bg-red-500"
				>
					Nie jestem profesjonalistą
				</button>
			</div>
		</BaseModal>
	);
};
