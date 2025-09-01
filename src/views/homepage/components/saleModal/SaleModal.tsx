import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { StorageKeys } from "src/utils/storage/enums/storageKeys.enum";
import { BaseModal } from "../baseModal/BaseModal";

export const SaleModal = ({ onClose }: { onClose?: VoidFunction }) => {
	const [cookies, setCookie, removeCookie] = useCookies([StorageKeys.SALE]);
	const [didShowSaleModal, setDidShowSaleModal] = useState(cookies.isSaleShown);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const user = cookies.isSaleShown;
		if (!user) {
			setIsOpen(true);
		}
	}, []);

	const handleAccept = () => {
		const expirationDate = new Date();
		expirationDate.setMonth(expirationDate.getMonth() + 1);
		setCookie(StorageKeys.SALE, true, { expires: expirationDate });
		setIsOpen(false);
		setDidShowSaleModal(true);
	};

	const handleReject = () => {
		removeCookie(StorageKeys.SALE);
		window.history.back();
	};

	const handleClose = () => {
		onClose?.();
		setIsOpen(false);
		handleAccept();
	};

	return (
		<BaseModal hasCloseButton isOpen={isOpen} onClose={handleClose}>
			<div className="flex flex-col gap-4">
				<h1 className="text-4xl text-red-600">Na sprzedaż !!! </h1>
				<p className="text-lg">
					Tytuł prasowy:
					<img src="/public/assets/logo.png" /> Oferta obejmuje znak towarowy
					czasopisma, Know-how, domenę czasopisma, harmonogram wydawniczy na
					rynek polski oraz design i layout.
					<br />
					Powodem sprzedaży jest zmiana branży.
				</p>
				<p>
					Więcej informacji pod numerem telefonu:
					<br />
					797 125 418 <br />
					Wydawnictwo Media Tech s.c
				</p>
			</div>
			{/* <div className="flex flex-col lg:flex-row gap-4 w-full">
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
			</div> */}
		</BaseModal>
	);
};
