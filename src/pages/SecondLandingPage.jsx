import { Link } from "react-router-dom";
import { BackgroundImage, Container, Title } from "@mantine/core";

export default function SecondLandingPage() {
  // Global-ish resets (inline for now; move to CSS soon)
  const headingReset = { margin: 0, lineHeight: 1 };

  const heroSection = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f6f6f6",
    minHeight: "100svh", // use svh for mobile UI bars
    width: "100%", // avoids horizontal scroll from 100vw
    boxSizing: "border-box", // padding won't add extra height
    paddingBlockStart: "16vh", // replace margin-top with padding
    paddingInlineStart: "15.76vw", // replace margin-left with padding
    overflow: "clip", // avoid 1px overflow from transforms
  };

  const buttonsContainerStyles = {
    display: "flex",
    gap: "1.94vw",
    fontSize: "2.5vw",
    alignItems: "center",
  };

  const buttonStyle = {
    border: "0px solid black",
    backgroundColor: "#5DE5BB",
    borderRadius: "5.17vw",
    padding: "1.67vw",
    color: "white",
    display: "inline-flex",
    gap: "0.83vw",
    justifyContent: "center",
    alignItems: "center",
    ...headingReset, // kill default h2 margins if you use <h2> as a "button"
  };

  const imageStyle = { height: "6.5vw", width: "10.4vw" };
  const portfolioText = {
    fontSize: "13.89vw",
    margin: "0 auto",
    ...headingReset,
  };

  return (
    <main style={{ margin: 0 }}>
      {/* === PORTFOLIO HERO SECTION === */}
      <div className="hero-section" style={heroSection}>
        <div className="buttons-container" style={buttonsContainerStyles}>
          <h2 className="graphic-design-button" style={buttonStyle}>
            graphic design
          </h2>
          <h2 className="the-and" style={headingReset}>
            &
          </h2>
          <img src="/uiux.png" alt="UI/UX Icon" style={imageStyle} />
        </div>

        <div className="hero-text-container">
          <h1 className="portfolio-text" style={portfolioText}>
            Portf
          </h1>
          <h1 className="portfolio-text" style={portfolioText}>
            olio
          </h1>
        </div>

        <img
          src="/Vi.png"
          alt="Sketch of Victorienne"
          style={{
            position: "absolute",
            right: "19%", // move it horizontally
            top: "35%", // move it vertically
            height: "35.2vw",
            width: "22.5vw",
            zIndex: 2, // make sure it goes above the text
            transform: "translate(20%, -20%)", // fine-tune overlap
          }}
        />
      </div>

      {/* === ABOUT ME === */}
      <div
        className="hero-section"
        style={{
          ...heroSection,
          paddingBlockStart: "0",
          paddingInlineStart: "0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={headingReset}>Hello</h1>
      </div>
    </main>
  );
}
