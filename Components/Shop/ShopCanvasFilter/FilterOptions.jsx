import React, { useState } from 'react';
import { Accordion, UncontrolledAccordion } from 'reactstrap';
import BrandFilterDropdown from './BrandFilterDropdown';
import ColorFilter from './ColorFilter';
import PriceRange from './PriceRange';
import CategoryFilter from './CategoryFilter';
import DiscountRangeFilter from './DiscountRangeFilter';

const FilterOptions = ({ productData }) => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen('1');
    } else {
      setOpen(id);
    }
  };
  return (
    <Accordion open={open} className='category-name' toggle={toggle}>
      <UncontrolledAccordion defaultOpen={['1', '2', '3', '4', '5']} stayOpen>
        <BrandFilterDropdown productData={productData} />
        <ColorFilter productData={productData} />
        <PriceRange productData={productData} />
        <CategoryFilter productData={productData} />
        <DiscountRangeFilter productData={productData} />
      </UncontrolledAccordion>
    </Accordion>
  );
};

export default FilterOptions;
