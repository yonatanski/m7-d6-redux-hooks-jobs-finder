import React from "react"
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import { StarFill } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { removeFromFav } from "../store/actions"

const Favourites = () => {
  const fav = useSelector((state) => state.favourites.elements)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {fav.map((f) => (
              <ListGroupItem>
                <StarFill onClick={() => dispatch(removeFromFav(f))} />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
