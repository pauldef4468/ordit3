import { useRouter } from "next/router";
import MyNavbar from "../../components/myNavbar";
import { Container, CardDeck, Row, Col } from "react-bootstrap";

function Order(props) {
  const router = useRouter();
  const estId = router.query.id;
  return (
    <div>
      <MyNavbar activeLink="home"></MyNavbar>
      <Container>
        <h1>This is the order page</h1>
        <h4> The establishment id is: {estId}</h4>
      </Container>
    </div>
  );
}

export default Order;
