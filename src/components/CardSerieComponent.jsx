import "react";
import {
  Card as RCard,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
//import PropTypes from 'prop-types';

export const CardSerieComponent = ({cardContent}) => {

   const  {extension, path } = cardContent.thumbnail;

  return (
    <RCard >
      <CardImg top src={`${path}.${extension}`} alt={cardContent.name} />
      <CardBody>
        <CardTitle>{cardContent.title}</CardTitle>
        <CardText>{cardContent.endYear}</CardText>
      </CardBody>
    </RCard>
  );
};

// CardComponent.propTypes = {
//   characterMap.thumbnail: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };


