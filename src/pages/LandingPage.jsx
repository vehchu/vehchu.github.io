import { Link } from "react-router-dom";
import { landingText } from "../content/landingText";
import {
  Container,
  Title,
  Text,
  Button,
  Badge,
  Group,
  Card,
  Image,
  SimpleGrid,
  Stack,
} from "@mantine/core";

export default function LandingPage() {
  const contentStyle = {
    maxWidth: "1200px",
    width: "100%",
    padding: "clamp(1rem, 4vw, 3rem)",
    boxSizing: "border-box",
    margin: "0 auto",
  };

  const skillHobbyStyle = {
    maxWidth: "1200px",
    width: "100%",
    padding: "clamp(1rem, 4vw, 3rem)",
    boxSizing: "border-box",
    margin: "0",
    fontSize: "clamp(10px, 1.2vw, 14px)",
  };

  const h1Main = {
    fontSize: "clamp(3rem, 12vw, 12.5rem)",
    margin: 0,
    fontWeight: "bold",
    lineHeight: 1,
  };

  return (
    <main>
      <Container className="main-container" style={{ padding: 0 }}>
        {/* ===== PORTFOLIO WORD THINGY ===== */}
        <Container
          className="section-container-1"
          style={{
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: "#f6f6f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: 0,
          }}
        >
          <div style={{ ...contentStyle, position: "relative" }}>
            <div
              className="text-buttons"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "clamp(0.5rem, 2.5vw, 2rem)",
                marginBottom: "clamp(0.5rem, 2vh, 1.5rem)",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#5DE5BB",
                  borderRadius: "4rem",
                  fontSize: "clamp(1rem, 2.5vw, 2.25rem)",
                  pointerEvents: "none",
                  paddingTop: ".5rem",
                  paddingBottom: ".5rem",
                  fontStyle: "normal",
                  letterSpacing: "-1.8px",
                }}
              >
                graphic design
              </Button>
              <Text
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 2.25rem)",
                  color: "#332c2b",
                }}
              >
                &
              </Text>
              <Text
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 2.25rem)",
                  color: "#9787FF",
                }}
              >
                ui/ux
              </Text>
            </div>

            <div className="main-text-box">
              <h1 style={h1Main}>PORTF</h1>
              <h1 style={h1Main}>OLIO</h1>
            </div>
            {/* <h2>Victorienne Tiu</h2> */}
          </div>

          <img
            src="/Vi.png"
            alt="Victorienne"
            style={{
              position: "absolute",
              right: "clamp(12px, 12vw, 96px)",
              bottom: "clamp(12px, 10vh, 120px)",
              width: "clamp(180px, 22vw, 460px)",
              height: "auto",
              maxHeight: "75svh",
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </Container>

        {/* ===== ABOUT ME ===== */}
        <Container
          style={{
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: "#f6f6f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            flexDirection: "column",
          }}
        >
          <div className="about-me-box" style={contentStyle}>
            <h1 style={{ marginTop: 0 }}>About Me</h1>
            <p>{landingText.aboutme}</p>
          </div>

          <div className="about-me-boxes-container" style={{}}>
            <div className="box1">
              <img src="/aboutMe.png" />
            </div>
          </div>
        </Container>

        {/* ===== SKILLS AND HOBIES:) I <3 BTS ===== */}
        <Container
          style={{
            minHeight: "60vh",
            width: "100vw",
            backgroundColor: "#f6f6f6",
            display: "flex",
            //alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <div style={skillHobbyStyle} className="skill-hobby-box">
            <h1 style={{ marginTop: "auto" }}>Skills</h1>
            <img src="/skillhobby.png" />
            <div className="unordered-list-box">
              <ul>
                <li>UI Design</li>
                <li>User Experience</li>
                <li>Branding</li>
                <li>Website Design</li>
                <li>Mobile Design</li>
              </ul>
            </div>
          </div>

          <div style={skillHobbyStyle} className="skill-hobby-box">
            <h1 style={{ marginTop: 0 }}>Hobbies</h1>
            <div className="unordered-list-box">
              <li>Pilates</li>
              <li>Bouldering</li>
              <li>Graphic Design/Art</li>
              <li>Pottery</li>
              <li>Brewing Coffee and Matcha</li>
            </div>
          </div>
        </Container>

        {/* ===== TESTER ===== */}
        <Container
          style={{
            minHeight: "60vh",
            width: "100vw",
            backgroundColor: "#f6f6f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <div style={contentStyle}>
            <h1 style={{ marginTop: 0 }}>Tester</h1>
            <p>hello</p>
          </div>
        </Container>

        {/* ===== TESTER ===== */}
        <Container
          style={{
            minHeight: "60vh",
            width: "100vw",
            backgroundColor: "#f6f6f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <div style={contentStyle}>
            <h1 style={{ marginTop: 0 }}>Tester</h1>
            <p>hello</p>
          </div>
        </Container>
      </Container>
    </main>
  );
}
