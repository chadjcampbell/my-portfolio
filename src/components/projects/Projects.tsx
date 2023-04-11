export const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="wrapper">
        <div className="accordion">
          <div className="accordion-panel">
            <h3 id="panel1-heading">
              <button
                id="accordion-trigger"
                aria-controls="panel1-content"
                aria-expanded="true"
              >
                <span id="panel1-title">Tally Yo</span>
                <img
                  aria-hidden="true"
                  className="accordion-icon"
                  src="./tally-yo-icon.png"
                  alt="tally-yo icon"
                />
              </button>
            </h3>
            <div
              className="accordion-content"
              id="panel1-content"
              aria-aria-labelledby="panel1-heading"
              aria-hidden="true"
              role="region"
            >
              <p>
                Tally Yo is a chat app where you gain cash by chatting with
                friends, or paper trading stocks. You can search, buy, and sell,
                then check out how your picks are doing with portfolio
                performance.
              </p>
              <img
                className="accordion-image"
                src="./tally-yo-ss.png"
                alt="tally-yo screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
