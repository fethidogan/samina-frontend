import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { getAPIData } from '../../../Utils';
import AutoFadeSlider from '../Common/AutoFadeSlider';
import ProductDetails from '../ProductBundle/ProductDetails';
import ProductFilterButton from './ProductFilterButton';

const RightsideContain = () => {
  const router = useRouter();
  const { id } = router.query;
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    const types = ['product'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}/${id ? id : 1}`).then((res) => {
        type === 'product' && setSingleProduct(res?.data);
      });
    });
  }, [router]);
  return (
    <Col lg='9' xs='12'>
      <ProductFilterButton />
      <div className='details-items'>
        <Row className='g-4'>
          <Col md='6'>
            <AutoFadeSlider singleProduct={singleProduct} id={id} />
          </Col>
          <Col md='6'>
            <ProductDetails singleProduct={singleProduct} id={id} />
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default RightsideContain;
