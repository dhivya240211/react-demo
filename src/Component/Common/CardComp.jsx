import React from 'react'
import"../Common/cardcomp.css"
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle, Button
} from "reactstrap"
function CardComp(props) {
  return (
    <Card
      style={{
        width: '18rem'
      }}
    >
      <img className="toy"
        alt="Sample"
         height="300px" width="300px"src= {props.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          {props.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Price: ---  {props.price}
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <button className='offer'>50% OFFER</button>
        <h6 className='doll'>Deal Of The Day</h6>

        <Button className='mig'>
          BUY
        </Button>
      </CardBody>
    </Card>
  )
}
export default CardComp