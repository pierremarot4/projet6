import { useParams } from "react-router-dom";
import { useFetchLogement } from "../../../hooks/useApi.js";
import ErrorPage from "../Erreur/Erreur.js";
import { Carousel } from "../../slideshow.jsx";
import "./Logement.scss";
import { Tag } from "../../tag.jsx";
import { Stars } from "../../stars.jsx";
import { Collapse } from "../../collapse.jsx";
import { Equipment } from "../../equipment.jsx";
import Footer from "../../footer.jsx";
import Navbar from "../../navbar.jsx";

export default function Logement() {
  let { id } = useParams();
  const { data, loading, error } = useFetchLogement(id);

  if (loading) return <div>Page is loading ...</div>;
  if (error || !data) return <ErrorPage />;

  const starCounts = Stars(data.rating);

  return (
    <>
      <Navbar />
      <div className="logement">
        <Carousel images={data.pictures} />
        <div className="logement-details">
          <div className="logement__main">
            <div className="logement__main_title">
              <h2>{data.title}</h2>
              <span className="logement__main_title__location">
                {data.location}
              </span>
              <div className="tag">
                {data.tags.map((t, index) => (
                  <Tag key={index} tag={t} />
                ))}
              </div>
            </div>
            <div className="logement__stats">
              <div className="logement__main_name">
                <span>{data.host.name}</span>
                <img src={data.host.picture} alt={data.host.name} />
              </div>
              <div className="count-box">
                {starCounts.map((count, index) => (
                  <span className="count-star" key={index}>
                    {count}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="logement__collapse">
          <div className="logement__collapse_item">
            <Collapse title="Description">{data.description}</Collapse>
          </div>
          <div className="logement__collapse_item">
            <Collapse title="Equipements">
              {data.equipments.map((e, index) => (
                <Equipment key={index} equipment={e} />
              ))}
            </Collapse>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
