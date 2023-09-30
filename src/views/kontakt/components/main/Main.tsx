import { CONTACT_DATA } from "@views/kontakt/consts/data.consts";
import { Employee } from "../employee/Employee";

export const Main = () => {
	return (
		<>
			<main className="container pt-14 mx-auto bg-white">
				<div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left responsive-padding gap-4 lg:gap-0">
					<div className="lg:col-start-1 lg:col-end-2 w-full bg-white flex flex-col gap-8 pb-16">
						{CONTACT_DATA.employees.map((employee, index) => (
							<Employee employee={employee} key={index} />
						))}
						<div className="text-start flex flex-col gap-4">
							<h5 className="text-3xl lg:text-2xl font-medium text-start">
								Adres redakcji
							</h5>
							<p className="text-xl lg:text-lg">Wydawca: Media Tech s.c.</p>
							<div>
								<p className="text-xl lg:text-lg">ul. Żorska 1/45</p>
								<p className="text-xl lg:text-lg">47-400 Racibórz</p>
							</div>
							<p className="text-xl lg:text-lg">NIP: 639-198-73-37</p>
							<div>
								<p className="text-xl lg:text-lg">
									Bank Zachodni WBK S.A., numer konta:
								</p>
								<p className="text-xl lg:text-lg">
									38 1500 1214 1212 1009 9997 0000
								</p>
							</div>
						</div>
					</div>

					<div className="lg:col-start-2 lg:col-end-3 w-full relative z-20 flex flex-col justify-end">
						<div className="hidden lg:block bg-before"></div>
						<div className="p-8 flex flex-col gap-4">
							<h1 className="text-primary text-8xl text-left">Jesteśmy</h1>
							<h1 className="text-primary text-6xl text-center">do Twojej</h1>
							<h1 className="text-primary text-8xl text-right">dyspozycji.</h1>
							{/* <h1 className="text-primary text-6xl text-left">Jesteśmy</h1>
							<h1 className="text-primary text-8xl text-center">do Twojej</h1>
							<h1 className="text-primary text-6xl text-right">dyspozycji.</h1> */}
						</div>
						<img
							src="/images/contact-bg.svg"
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
