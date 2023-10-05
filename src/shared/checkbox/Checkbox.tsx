import { ErrorMessage } from "@hookform/error-message";
import type { InputProps } from "../input/Input";
import type { AktualnyNumerForm } from "../input/types/AktualnyNumerForm";
import { FormErrorMessage } from "../errorMessage/ErrorMessage";

type CheckboxProps = {};

export const Checkbox = ({
	id,
	name,
	label,
	type,
	className = "",
	placeholder,
	errors,
	register,
	rules,
	value,
	...props
}: InputProps<AktualnyNumerForm>) => {
	const hasError = !!errors;

	return (
		<div className="pb-4">
			<div className="mb-3 mt-4 w-full flex items-center gap-3">
				<input
					id={id}
					name={name}
					type="checkbox"
					aria-label={label}
					aria-invalid={hasError}
					placeholder={placeholder}
					className="w-5 h-5 accent-primary  bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
					{...props}
					{...(register && register(name, rules))}
				/>

				<label htmlFor={id} className="block text-sm font-medium ">
					Zapoznałem się{" "}
					<a href="/" target="_blank" className="text-primary underline">
						Regulaminem Serwisu
					</a>{" "}
					i akceptuję jego treść.
				</label>
			</div>
			<ErrorMessage
				errors={errors}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				name={name as any}
				render={({ message }) => (
					<FormErrorMessage className="text-red-600 text-sm">
						{message}
					</FormErrorMessage>
				)}
			/>
		</div>
	);
};
