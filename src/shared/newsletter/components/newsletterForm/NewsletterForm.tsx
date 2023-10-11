import { Checkbox } from "@shared/checkbox/Checkbox";
import { Input } from "@shared/input/Input";
import { emailPattern } from "@shared/input/consts/emailPattern";
import type { NewsletterFormType } from "@shared/input/types/NewsletterForm.types";
import { useForm } from "react-hook-form";

type NewsletterFormProps = {
	toggleNewsletter: VoidFunction;
};

export const NewsletterForm = ({ toggleNewsletter }: NewsletterFormProps) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<NewsletterFormType>({
		mode: "all",
	});

	const onSubmit = async (formData: NewsletterFormType) => {
		if (isValid) {
			try {
				await fetch("/api/newsletter", {
					method: "POST",
					body: JSON.stringify({
						email: formData.email,
					}),
				});
				reset();
				toggleNewsletter();
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<form>
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
					type="text"
					id="nazwa-firmy"
					name="nazwa-firmy"
					label="Nazwa firmy / Imię i Nazwisko*"
					placeholder="Podaj imię i nazwisko lub nazwę firmy"
					register={register}
					rules={{
						required: "To pole jest wymagane.",
					}}
					errors={errors}
				/>

				<Checkbox
					id="zgoda"
					name="zgoda"
					className="mb-2"
					register={register}
					rules={{
						required:
							"Proszę zaakceptować zgodę o przetwarzaniu danych osobowych.",
					}}
					errors={errors}
				/>
			</form>
			<div className="w-full text-right">
				<a href="/" target="_blank" className="text-primary text-sm  ">
					Dowiedz się, w jaki sposób przetwarzamy Twoje dane osobowe
				</a>
			</div>
			<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b pt-4">
				<button
					className="bg-red-500 text-white  uppercase text-sm px-6 py-3 w-full lg:w-auto rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
					onClick={toggleNewsletter}
				>
					Zamknij
				</button>
				<button
					className="bg-primary text-white active:bg-emerald-600 w-full lg:w-auto  uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-300 disabled:cursor-not-allowed"
					type="button"
					onClick={handleSubmit(onSubmit)}
					disabled={!isValid}
				>
					Zapisuję się do newslettera
				</button>
			</div>
		</>
	);
};
