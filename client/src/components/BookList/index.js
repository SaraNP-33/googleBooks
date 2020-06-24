import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


// BookList renders a bootstrap list item
export function BookList({children}) {
  return (
    <ul className="list-group">{children}</ul>
    );
}

  // BookListItem renders a bootstrap list item containing data from api call
  export class BookListItem extends React.Component{

    render(){
     console.log(this.props)
;    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
              <p>
                {this.props.synopsis}
              </p>
              <a
                target="_blank"
                href={this.props.link}
                rel="noopener noreferrer"
              >
                Go to Google Books
              </a>
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }