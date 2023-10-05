import { Icon } from "@iconify/react";
import { ICON_SIZE } from "@layouts/consts/iconSize";
import type { Employee as EmployeeType } from "@views/kontakt/types/employee";

type EmployeeProps = {
	employee: EmployeeType;
};

export const Employee = ({ employee }: EmployeeProps) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<h5 className="text-2xl lg:xl 2xl:text-3xl font-medium text-start">
					{employee.position}
				</h5>
				<div className="flex gap-2 items-center">
					<img
						src={employee.imageURL}
						className="bg-primary rounded-full w-[72px] h-[72px]"
					/>
					<p className="text-lg 2xl:text-2xl font-semibold">
						{employee.fullName}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex gap-2 items-center">
					<Icon icon="mdi:cellphone" width={ICON_SIZE} />
					<a
						className="text-md 2xl:text-2xl"
						href={`tel${employee.phoneNumber}`}
					>
						{employee.phoneNumber}
					</a>
				</div>

				<div className="flex gap-2 items-center">
					<Icon icon="mdi:email-outline" width={ICON_SIZE} />
					<a
						className="underline text-md 2xl:text-2xl text-thirdnary"
						href={`mailto:${employee.mail}`}
					>
						{employee.mail}
					</a>
				</div>
			</div>
		</div>
	);
};
