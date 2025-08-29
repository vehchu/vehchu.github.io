import { Link } from "react-router-dom";
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
  return (
    <main>
      {/* Vi's weird picture word thingy goes here */}
      <Container
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "#f6f6f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Tester</h1>
        <p>hello</p>
      </Container>
    </main>
  );
}
