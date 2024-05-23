import React from "react"
import MainBanner from "../../banner.jsx"
import Footer from "../../footer.jsx"
import Card from "../../card.jsx";
import "./Accueil.scss";
import { useFetchLogements } from "../../../hooks/useApi.js";
import Erreur from "../Erreur/Erreur.js";
import Navbar from "../../navbar.jsx";

export default function Accueil() {
  const { data, loading, error } = useFetchLogements();

  if (loading) return <div>Page is loading ...</div>;
  if (error) return <Erreur />;

  return (
    <div>
      <Navbar />
      <MainBanner />
      <section className="galery-container">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            picture={item.cover}
            href={`/logement/${item.id}`}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}