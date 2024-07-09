import "react";
import {
  Card as RCard,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import CardComponent from "./CardComponent";
//import PropTypes from 'prop-types';

export const Card = ({cardContent}) => {

   const  {extension, path } = cardContent.thumbnail;

  return (
    <RCard >
      <CardImg top src={`${path}.${extension}`} alt={cardContent.name} height={"100%"}/>
      <CardBody>
        <CardTitle tag={"h5"}>{cardContent.name || cardContent.title}</CardTitle>
        <CardText>{cardContent.description || cardContent.variantDescription || cardContent.endYear}</CardText>
      </CardBody>
    </RCard>
  );
};

// CardComponent.propTypes = {
//   characterMap.thumbnail: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };


