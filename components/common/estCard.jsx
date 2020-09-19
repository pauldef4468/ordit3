import { Card } from "react-bootstrap";

function EstCard({ est }) {
  return (
    <div>
      <Card>
        <Card.Img
          className="mt-1 ml-1"
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${est.image[0].url}`}
          //   top={true}
          style={{ width: 75 }}
        ></Card.Img>

        <Card.Body>
          <Card.Title>{est.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {est.description}
          </Card.Subtitle>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Card.Link href={`/establishment/${est.id}`}>Select</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EstCard;
