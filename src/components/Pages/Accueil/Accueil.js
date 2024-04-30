import React from "react"
import MainBanner from "../../banner"
import Footer from "../../footer"
import Card from "../../card";
import "./Accueil.scss";

export default function Accueil() {
    const { data, loading, error } = useFetchLogements();

    if (loading) return <div>Page is loading ...</div>;
    if (error) return <Erreur />;

    return (
      <div>
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
  