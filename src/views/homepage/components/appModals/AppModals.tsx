import { useState } from "react";
import { BaseModal } from "../baseModal/BaseModal";
import GuardModal from "../guardModal/GuardModal";
import { SaleModal } from "../saleModal/SaleModal";
import { useCookies } from "react-cookie";
import { StorageKeys } from "src/utils/storage/enums/storageKeys.enum";

export const AppModals = () => {
	const [cookies, setCookie, removeCookie] = useCookies([
		StorageKeys.PRO_USER,
		StorageKeys.SALE,
	]);

	const [step, setStep] = useState<"sale" | "guard" | null>(
		cookies.isSaleShown ? "guard" : "sale",
	);

	return (
		<>
			{step === "sale" && <SaleModal onClose={() => setStep("guard")} />}
			{step === "guard" && <GuardModal />}
		</>
	);
};
