import Header from "../components/header";
import Footer from "../components/footer";
// import FilterMenu from "../components/filtermenu";
import projects from "../data/projects";

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
        {/* <FilterMenu /> */}
      <div className="all-results-container">
        <p className="result-count">
          About {projects.length} results (0.43 seconds)
        </p>
        <div className="results-content">
          {projects.map((item) => (
            <div className="result-card">
              <a target={"_blank"} href={`${item.link}`}>
                <p>
                  {`${formatURL(item.link)[0]}`}
                  {formatURL(item.link)[1].map((path) => (
                    <span>{` › ${path}`}</span>
                  ))}
                </p>
                <h3>{`${item.name}`}</h3>
              </a>
              <p className="excerpt">{`${item.excerpt}`}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
