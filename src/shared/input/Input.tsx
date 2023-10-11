import {
	type DetailedHTMLProps,
	type InputHTMLAttributes,
	type ReactNode,
} from "react";
import type { DeepMap, FieldError, RegisterOptions } from "react-hook-form";
import type { AktualnyNumerForm } from "./types/AktualnyNumerForm.types";
import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "../errorMessage/ErrorMessage";

export type InputProps<T> = {
	id: string;
	name: string;
	label?: string | ReactNode;
	className?: string;
	type?: "text" | "email" | "tel" | "number" | "checkbox";
	register: any;
	rules?: RegisterOptions;
	errors?: Partial<DeepMap<T, FieldError>>;
	isTextArea?: boolean;
	value?: string;
	useFormGroup?: boolean;
	rows?: number;
	options?: { value: number; label: string; description?: string }[];
} & Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	"size"
>;

export const Input = ({
	label,
	id,
	name,
	register,
	errors,
	type,
	placeholder,
	rules,
	...props
}: InputProps<AktualnyNumerForm>) => {
	const hasError = !!errors;

	return (
		<div>
			<div className="mb-3 mt-1 w-full">
				<label
					htmlFor={id}
					className="block mb-2 text-sm font-medium text-primary"
				>
					{label}
				</label>
				<input
					id={id}
					name={name}
					type={type}
					aria-label={label}
					aria-invalid={hasError}
					placeholder={placeholder}
					className="block w-full p-4  border border-gray-300 rounded-lg sm:text-md focus:ring-primary focus:border-primary "
					{...props}
					{...(register && register(name, rules))}
				/>
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
