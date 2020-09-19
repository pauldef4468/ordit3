import Router from "next/router";
import Link from "next/link";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import http from "../lib/httpService";
import MyNavbar from "../components/myNavbar";
import styles from "../styles/index.module.css";
import { getEstablishments } from "../lib/establishmentsService";
import EstCard from "../components/common/estCard";
// import AppContext from "../context/AppContext";

export default function Home({ ests }) {
  return (
    <>
      <MyNavbar activeLink="home"></MyNavbar>
      <Container>
        <div className={styles.mainSearch}>
          <h3 className="mt-3">Pick a Place!</h3>
          <h5>The easiest way to order.</h5>
        </div>
        <Row>
          {ests.map((est) => (
            <Col xs="12" sm="4" style={{ padding: 5 }} key={est.id}>
              <EstCard est={est}></EstCard>
            </Col>
          ))}
        </Row>
        {/* <CardDeck className="mx-auto">
          {ests.map((est) => (
            <EstCard key={est.id}></EstCard>
          ))}
        </CardDeck> */}
      </Container>
    </>
  );
}
export async function getStaticProps(context) {
  let ests;
  try {
    const response = await getEstablishments();
    ests = response.data;
  } catch (e) {
    console.error(e);
  }
  return {
    props: { ests }, // will be passed to the page component as props
  };
}
