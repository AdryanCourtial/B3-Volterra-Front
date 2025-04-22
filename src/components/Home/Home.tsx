const Home = () => {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl">
          Volterra : Optimisation de l'énergie
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 mt-30 lg:space-y-0">
          <img
            src="/src/assets/Home.png"
            alt="Home Image"
            className="w-full lg:w-1/2 h-auto rounded-lg"
          />
          <div className="text-left lg:w-1/2 space-y-6">
            <p className="text-xl text-[#212121]">
              "Volterra : L'IA au service de votre consommation d'énergie."
            </p>

            <div className="space-y-4 text-[#757575]">
              <p>
                Volterra utilise l'intelligence artificielle pour vous guider
                vers des actions concrètes d'optimisation de la consommation
                d'énergie. Grâce à notre questionnaire personnalisé, nous
                évaluons vos habitudes et vous aidons à prendre des décisions
                éclairées.
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Impact écologique :</strong> Réduisez votre empreinte
                  carbone en diminuant votre consommation d'énergie, responsable
                  de 60% des émissions mondiales de gaz à effet de serre.
                </li>
                <li>
                  <strong>Efficacité énergétique :</strong> L'amélioration de
                  l'efficacité énergétique peut réduire les émissions mondiales
                  de CO2 de 40% d'ici 2040, selon l'AIE.
                </li>
                <li>
                  <strong>Économies :</strong> En optimisant votre consommation,
                  vous pourriez économiser jusqu'à 20% sur votre facture
                  énergétique annuelle.
                </li>
                <li>
                  <strong>Accessibilité et simplicité :</strong> Volterra rend
                  l'optimisation énergétique accessible à tous grâce à des
                  recommandations personnalisées et faciles à suivre.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
