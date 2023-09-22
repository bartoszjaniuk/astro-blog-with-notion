export const Sections = () => {
  return (
    <section className="bg-softBg">
      <div
        id="cards-section"
        className="container mx-auto h-auto lg:h-[500px] items-center grid grid-cols-2 lg:grid-cols-4 gap-8 responsive-padding "
      >
        <div className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative">
          <span className="card-background" />
          <div className="flex-col justify-center items-center  flex  card-effect">
            <img
              src="/images/katalog.svg"
              alt="Katalog"
              width={200}
              height={200}
            />
            <h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
              Katalog
            </h2>
          </div>
        </div>
        <div className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative">
          <span className="card-background" />
          <div className="flex-col justify-center items-center  flex  card-effect">
            <img
              src="/images/wydarzenia.svg"
              alt="Wydarzenia"
              width={200}
              height={200}
            />
            <h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
              Wydarzenia
            </h2>
          </div>
        </div>

        <div className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative">
          <span className="card-background" />
          <div className="flex-col justify-center items-center  flex  card-effect">
            <img
              src="/images/egazeta.svg"
              alt="E-Gazeta"
              width={200}
              height={200}
            />
            <h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
              E-Gazeta
            </h2>
          </div>
        </div>

        <div className="h-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative">
          <span className="card-background" />
          <div className="flex-col justify-center items-center  flex  card-effect">
            <img
              src="/images/polecenia.svg"
              alt="Polecamy"
              width={200}
              height={200}
            />
            <h2 className="text-xl lg:text-2xl font-bold max-w-[200px] break-words">
              Polecamy
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
