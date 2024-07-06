import "react";
import {
  Card as RCard,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import PropTypes from 'prop-types';

const CardComponentNew = ({characterMap}) => {

   const  {extension, path } = characterMap.thumbnail;

  return (
    <RCard >
      <CardImg top src={`${path}.${extension}`} alt={characterMap.name} />
      <CardBody>
        <CardTitle>{characterMap.name}</CardTitle>
        <CardText>{characterMap.description}</CardText>
      </CardBody>
    </RCard>
  );
};

// CardComponent.propTypes = {
//   characterMap.thumbnail: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default CardComponentNew;
