import { useRouter } from "next/router";
import MyNavbar from "../../components/myNavbar";
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { getEstablishment } from "../../lib/establishmentsService";
import PadButton from "../../components/common/PadButton";

function Establishment({ est }) {
  const router = useRouter();
  const productTypes = est.product_types;
  // TODO get the menus here
  // Menus will have order methods so when user picks an order method it's picking a
  // menu actually
  // this will enable the date / time picker
  const orderMethods = est.order_methods;
  let currentOrderMethod = null;

  function handleRadioChange(methodId) {
    console.log("handleRadioChange");
    currentOrderMethod = orderMethods.find((orderMethod) => {
      return orderMethod.id == methodId;
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
  }

  return (
    <div>
      <MyNavbar activeLink="home"></MyNavbar>
      <Container>
        {/* <Row xs={1} md={2} className="text-center"> */}
        <Row xs={1} md={2}>
          <Col>
            <Image
              className="mt-2"
              style={{ width: 125 }}
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${est.image[0].url}`}
              rounded
            />
            <h2>{est.name}</h2>
            <div>
              <ul>
                {productTypes.map((productType) => (
                  <li key={productType.id}>{productType.description}</li>
                ))}
              </ul>
            </div>

            <Form onSubmit={handleSubmit}>
              <div className="mb-2">
                <ToggleButtonGroup
                  type="radio"
                  onChange={handleRadioChange}
                  name="method"
                >
                  {orderMethods.map((method) => (
                    <ToggleButton
                      variant="outline-primary"
                      key={method.id}
                      size="sm"
                      value={method.id}
                    >
                      {method.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
              <PadButton
                label="Begin Order"
                validate={false}
                waiting={null}
                type="submit"
              ></PadButton>
            </Form>
          </Col>
          <Col>
            <div className="vcard mt-3">
              <div className="adr">
                <div className="street-address">{est.address}</div>
                <span className="locality">{est.city}</span>
                <span className="region">{est.state}</span>
                <span className="postal-code">{est.zip}</span>
              </div>
              <div className="tel">{est.phone}</div>
            </div>
          </Col>
        </Row>
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
