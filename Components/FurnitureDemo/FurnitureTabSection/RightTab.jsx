import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import { CommonPath } from '../../Constant';
import DynamicRating from '../../Element/DynamicRating';

const RightTab = ({ elem, LeftRightTab }) => {
  const { symbol, currencyValue } = useSelector((state) => state.CurrencyReducer);
  return (
    <>
      {elem.childtype === 'rightbanners' && (
        <Col lg='4' md='6'>
          <div className='product-list'>
            {elem?.banners?.map((item, i) => {
              return (
                <div className={`${LeftRightTab ? LeftRightTab : 'product-box product-box1'}`} key={i}>
                  <div className='img-wrapper bg-transparent'>
                    <Link href={'/product/product_left_sidebar/21'} className='text-center'>
                      <img src={`${CommonPath}/${item.image}`} className='img-fluid' alt='products' />
                    </Link>
                  </div>
                  <div className='product-details'>
                    <h3 className='theme-color'>
                      {symbol}
                      {(item.price * currencyValue).toFixed(2)}
                      <span className='font-light ms-2'>
                        {symbol}
                        {(item.mrp * currencyValue).toFixed(2)}
                      </span>
                    </h3>
                    <Link href={'/product/product_left_sidebar/25'} className='font-default'>
                      <h5>{item.title}</h5>
                    </Link>
                    <DynamicRating data={item.ratingstars} />
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      )}
    </>
  );
};

export default RightTab;
