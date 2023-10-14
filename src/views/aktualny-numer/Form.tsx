import { useForm } from "react-hook-form";
import { Checkbox } from "src/shared/checkbox/Checkbox";
import { Input } from "src/shared/input/Input";
import { emailPattern } from "src/shared/input/consts/emailPattern";
import { phoneNumberPattern } from "src/shared/input/consts/phoneNumberPattern";
import type { AktualnyNumerForm } from "@shared/input/types/AktualnyNumerForm.types";
import { StorageKeys } from "src/utils/storage/enums/storageKeys.enum";
import { storage } from "src/utils/storage/storage";

type FormProps = {
	toggleModal: VoidFunction;
};

const sendEmail = async (formData: AktualnyNumerForm) => {
	await fetch("/api/access", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	});
};

export const Form = ({ toggleModal }: FormProps) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<AktualnyNumerForm>({
		mode: "all",
	});

	const onSubmit = async (formData: AktualnyNumerForm) => {
		if (isValid) {
			try {
				// await sendEmail(formData);
				await sendEmail(formData);
				storage.setItem(StorageKeys.VERIFY_USER, true);
				toggleModal();
				const url = window.location.href;
				location.assign(`${url}/aktualny-numer`);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<div className="flex pl-4 py-4 border rounded-lg mb-4 gap-2">
				<span className="bg-primary w-1" />
				<p className="">
					Drogi czytelniku! Aby otrzymać dostęp do elektronicznej wersji
					czasopisma, wypełnij poniższy formularz.
				</p>
			</div>
			<form>
				<Input
					type="text"
					id="nazwa-firmy"
					name="nazwa-firmy"
					label="Nazwa firmy*"
					placeholder="Podaj nazwę firmy"
					register={register}
					rules={{
						required: "To pole jest wymagane.",
					}}
					errors={errors}
				/>
				<Input
					id="imie"
					type="text"
					name="imie"
					label="Imie*"
					placeholder="Podaj imię"
					register={register}
					rules={{
						required: "To pole jest wymagane.",
					}}
					errors={errors}
				/>
				<Input
					id="naziwsko"
					type="text"
					name="naziwsko"
					label="Nazwisko*"
					placeholder="Podaj nazwisko"
					register={register}
					rules={{
						required: "To pole jest wymagane.",
					}}
					errors={errors}
				/>
				<Input
					id="email"
					type="email"
					name="email"
					label="Email*"
					placeholder="Podaj swój email"
					register={register}
					rules={{
						required: "To pole jest wymagane.",
						pattern: emailPattern,
					}}
					errors={errors}
				/>
				<Input
					id="numer-telefonu"
					type="tel"
					name="numer-telefonu"
					label="Numer telefonu*"
					placeholder="Podaj numer telefonu"
					register={register}
					rules={{
						required: "To pole jest wymagane.",
						pattern: phoneNumberPattern,
					}}
					errors={errors}
				/>

				<Checkbox
					id="czyRegulaminZaakceptowany"
					name="czyRegulaminZaakceptowany"
					placeholder="Akceptuję regulamin"
					className="mb-2"
					register={register}
					rules={{
						required: "Proszę zaakceptować regulamin",
					}}
					errors={errors}
				/>
			</form>
			<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b pt-4">
				<button
					className="bg-red-500 text-white  uppercase text-sm px-6 py-3 w-full lg:w-auto rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
					onClick={toggleModal}
				>
					Zamknij
				</button>
				<button
					className="bg-primary text-white active:bg-thirdnary w-full lg:w-auto  uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-300 disabled:cursor-not-allowed"
					type="button"
					onClick={handleSubmit(onSubmit)}
					disabled={!isValid}
				>
					Przechodzę
				</button>
			</div>
		</div>
	);
};
