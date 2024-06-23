import "react";
import {
  Card as RCard,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import PropTypes from 'prop-types';

const CardComponent = ({ image, title, text }) => {

  const { src, alt } = image;

  return (
    <RCard >
      <CardImg top src={src} alt={alt} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </RCard>
  );
};

CardComponent.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardComponent;
