import PropTypes from 'prop-types';
import React from 'react';
import SliceServiceDetail from './SliceServiceDetail';
import { ServicesContainer } from '../../styles/slices/SliceServicesContainer.js';

const SliceServicesContainer = ({ slice }) => (
  <ServicesContainer>
    {slice.items.map(item => (
      <SliceServiceDetail key={item.link_service.slug} item={item} />
    ))}
  </ServicesContainer>
);

SliceServicesContainer.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceServicesContainer;
