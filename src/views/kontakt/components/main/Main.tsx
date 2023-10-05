import { CONTACT_DATA } from "@views/kontakt/consts/data.consts";
import { Employee } from "../employee/Employee";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ICON_SIZE } from "@layouts/consts/iconSize";

export const Main = () => {
	return (
		<>
			<main className="container pt-14 mx-auto bg-white">
				<div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left responsive-padding gap-4 lg:gap-0">
					<div className="lg:col-start-1 lg:col-end-2 w-full bg-white flex flex-col gap-8 pb-16">
						{CONTACT_DATA.employees.map((employee, index) => (
							<Employee employee={employee} key={index} />
						))}
						<div className="flex flex-col gap-4">
							<div className="flex flex-col gap-4">
								<h5 className="text-2xl lg:xl 2xl:text-3xl font-medium text-start">
									Redakcja
								</h5>
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex gap-2 items-center">
									<Icon icon="mdi:cellphone" width={ICON_SIZE} />
									<a className="text-md 2xl:text-2xl" href="tel:32 733 18 01">
										32 733 18 01
									</a>
								</div>

								<div className="flex gap-2 items-center">
									<Icon icon="mdi:email-outline" width={ICON_SIZE} />
									<a
										className="underline text-md 2xl:text-2xl text-thirdnary"
										href="mailto:redakcja@sprzetstomatologiczny.pl"
									>
										redakcja@sprzetstomatologiczny.pl
									</a>
								</div>
							</div>
						</div>
						<div className="text-start flex flex-col gap-4">
							<h5 className="text-2xl lg:xl 2xl:text-3xl font-medium text-start">
								Adres redakcji
							</h5>
							<p className="text-md 2xl:text-2xl">Wydawca: Media Tech s.c.</p>
							<div>
								<p className="text-md 2xl:text-2xl">ul. Żorska 1/45</p>
								<p className="text-md 2xl:text-2xl">47-400 Racibórz</p>
							</div>
							<p className="text-md 2xl:text-2xl">NIP: 639-198-73-37</p>
							<div>
								<p className="text-md 2xl:text-2xl">
									Bank Zachodni WBK S.A., numer konta:
								</p>
								<p className="text-md 2xl:text-2xl">
									38 1500 1214 1212 1009 9997 0000
								</p>
							</div>
						</div>
					</div>

					<div className="lg:col-start-2 lg:col-end-3 w-full relative z-20 flex flex-col ">
						<div className="hidden lg:block bg-before"></div>

						<img
							className="rounded-md"
							src="/images/contact-img.jpg"
							alt="Lekarz oraz lekarka"
							width={600}
							height={600}
						/>
					</div>
				</div>
			</main>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.2069333483964!2d18.194970077810815!3d50.0824124137933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711680eedadac47%3A0x3f1a36ff4fb32184!2sTworzywa%20Sztuczne%20w%20Przemy%C5%9Ble!5e0!3m2!1sen!2spl!4v1695994654802!5m2!1sen!2spl"
				width="100%"
				height="650"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</>
	);
};
