import React from "react";

export const Cookies = () => {
	return (
		<main className="container mx-auto responsive-padding py-8 h-full lg:h-screen">
			<h1 className="py-4 lg:py-8 text-5xl lg:text-6xl text-primary font-extralight">
				Polityka Cookies
			</h1>
			<p className="font-headings text-lg">
				Komunikat został wdrożony w odpowiedzi na nowe prawo telekomunikacyjne{" "}
				<a
					className="text-thirdnary underline"
					href="https://www.dziennikustaw.gov.pl/du/2012/1445"
				>
					Przejdz do strony
				</a>
				<br />
				Szanujemy prywatność naszych użytkowników i chcemy, aby korzystając z
				naszych witryn czuli się bezpiecznie. Poniżej przedstawiamy fragment
				naszej Polityki prywatności odnoszący się do tzw. plików Cookies.
			</p>
			<h5 className="font-semibold text-primary py-4 text-2xl">
				Drogi użytkowniku
			</h5>
			<ul>
				<li className="pb-4">
					<p className="font-headings text-lg">
						Kiedy wchodzisz na strony naszych witryn, na dysku Twojego komputera
						mogą być zapisywane tzw. ciasteczka (ang. cookies), czyli niewielkie
						pliki tekstowe wysyłane przez nasz serwer albo serwisy, do których
						odwołujemy się w naszych witrynach, np. pokazując multimedia.
					</p>
				</li>
				<li className="pb-4">
					<p className="font-headings text-lg">
						Ciasteczka i podobne technologie używane są w witrynach
						internetowych przede wszystkim ze względu na wygodę użytkowników,
						m.in po to, by jak najlepiej dostosować treści i funkcje witryny do
						ich potrzeb i oczekiwań, a także w celach statystycznych.
					</p>
				</li>
				<li className="pb-4">
					<p className="font-headings text-lg">
						Pliki ciasteczek wysyłamy wyjątkowo. Służą one tworzeniu statystyk,
						które pomagają dostosować zawartość stron do oczekiwań użytkowników,
						zapamiętaniu preferowanego wyglądu stron, np. ustawionego rozmiaru
						czcionki, odnotowaniu faktu głosowania w prowadzonych ankietach albo
						wykonaniu przez użytkownika kilkuetapowych czynności (np. dodania
						artykułu, dokonania zakupu w naszym sklepie internetowym).
						Korzystamy również z ciasteczek służących dopasowaniu wyświetlanych
						reklam do zainteresowań odwiedzających witryny. Oprócz ciasteczek
						wysyłanych z naszego serwera za pośrednictwem naszych witryn, pliki
						cookies mogą być wysyłane także z serwerów stron, do których się
						odwołujemy, np. YouTube czy serwisów społecznościowych.
					</p>
				</li>
				<li className="pb-4">
					<p className="font-headings text-lg">
						Zapisywanych na Twoim komputerze informacji wysyłanych z naszego
						serwera nigdzie nie gromadzimy i w żaden sposób nie przetwarzamy.
					</p>
				</li>

				<li className="pb-4">
					<p className="font-headings text-lg">
						Każdy użytkownik może zmienić ustawienia dotyczące ciasteczek w
						używanej przez siebie przeglądarce, w tym zupełnie wyłączyć
						możliwość ich zapisywania. Jeśli nie wyłączysz możliwości
						zapisywania ciasteczek pochodzących z naszych witryn, oznacza to
						Twoją zgodę na ich zapisywanie i przechowywanie w komputerze.
					</p>
				</li>
				<li>
					<p className="font-headings text-lg">
						Jeżeli zdecydujesz się na odrzucenie wszystkich ciasteczek, nie
						będzie możliwe korzystanie z niektórych treści treści i usług
						udostępnianych w naszych witrynach, w szczególności wymagających
						logowania. Wyłączenie ciasteczek nie powoduje natomiast braku
						możliwości przeglądania stron w naszych witrynach.
					</p>
				</li>
			</ul>
			<h5 className="font-semibold text-primary py-4 text-2xl">
				Jak wyłączyć ciasteczka?
			</h5>
			<ul>
				<li className="pb-4">
					<p className="font-headings text-lg">
						Każdy użytkownik Internetu może dostosować poziom ochrony przed
						ciasteczkami do swoich preferencji, w tym całkowicie zablokować
						możliwość pozostawiania plików cookies. Zwiększa to poziom
						bezpieczeństwa i ochrony danych, ale może także uniemożliwiać
						niektóre funkcje, np. zalogowanie się do witryny.
					</p>
				</li>
				<li className="pb-4">
					<p className="font-headings text-lg">
						Informacje na temat ustawień dotyczących ciasteczek w poszczególnych
						przeglądarkach dostępne są na poniższych stronach:
					</p>
				</li>
			</ul>
			<ul>
				<li>
					<a
						className="text-thirdnary underline"
						href="https://help.opera.com/pl/latest/web-preferences/#cookies"
					>
						w przeglądarce Opera
					</a>
				</li>
				<li>
					<a
						className="text-thirdnary underline"
						href="https://support.google.com/chrome/answer/95647?hl=pl"
					>
						w przeglądarce Chrome
					</a>
				</li>
				<li>
					<a
						className="text-thirdnary underline"
						href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl"
					>
						w przeglądarce Firefox
					</a>
				</li>
				<li>
					<a
						className="text-thirdnary underline"
						href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
					>
						w przeglądarce Safari
					</a>
				</li>
			</ul>
		</main>
	);
};
