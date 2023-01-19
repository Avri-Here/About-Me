import Header from "../components/header";
import Footer from "../components/footer";
import projects from "../data/projects";
import "./Css/projectsPage.css";

function Projects() {
  function formatURL(u) {
    let urltext = u;
    let url = new URL(urltext);
    let domain = url.origin;
    let pathname = url.pathname;
    let paths = pathname.split("/");
    paths = paths.filter(Boolean);
    return [domain, paths];
  }
  return (
    <div className="main">
      <Header />
      <div className="all-results-container">
        <p className="result-count" style={{fontSize:"1.2rem", fontWeight: "600"}}>
          About {projects.length} results (0.43 seconds)
        </p>
        <br/>
        <div className="results-content">
          {projects.map((item, index) => (
            <div className="result-card" key={index}>
              <a style={{ color: "blue" }} target={"_blank"} href={`${item.link}`}>
                <p style={{ color: "black" }}>
                  {`${formatURL(item.link)[0]}`}
                  {formatURL(item.link)[1].map((path, index) => (
                    <span key={index}>{` › ${path}`}</span>
                  ))}
                </p>
                <h3>{`${item.name}`}</h3>
              </a>
              <p className="excerpt">{`${item.excerpt}`}</p>
              <br />
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
