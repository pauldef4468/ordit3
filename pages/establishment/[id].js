import { useRouter } from "next/router";
import MyNavbar from "../../components/myNavbar";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import { getEstablishment } from "../../lib/establishmentsService";

function Establishment({ est }) {
  const router = useRouter();
  return (
    <div>
      <MyNavbar activeLink="home"></MyNavbar>
      <Container>
        <h1>{est.name}</h1>

        <p>
          Show information about this place such as address, phone, hours, etc.
        </p>
        <p>
          Should have a place order form here to enter the actual order screen
        </p>
      </Container>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id;
  const response = await getEstablishment(id);
  const est = response.data;
  return {
    props: { est }, // will be passed to the page component as props
  };
}

export default Establishment;
