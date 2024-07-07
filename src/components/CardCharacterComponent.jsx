import "react";
import {
  Card as RCard,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
//import PropTypes from 'prop-types';

export const CardCharacterComponent = ({cardContent}) => {

   const  {extension, path } = cardContent.thumbnail;

  return (
    <RCard >
      <CardImg top src={`${path}.${extension}`} alt={cardContent.name} />
      <CardBody>
        <CardTitle>{cardContent.name}</CardTitle>
        <CardText>{cardContent.description}</CardText>
      </CardBody>
    </RCard>
  );
};

// CardComponent.propTypes = {
//   characterMap.thumbnail: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };


