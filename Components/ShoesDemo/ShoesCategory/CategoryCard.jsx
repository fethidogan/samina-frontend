import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { ShoesCategorySlider } from '../../../Data/SliderSettingsData';
import { CommonPath } from '../../Constant';

const CategoryCard = ({ ShoesFilter }) => {
  const { symbol, currencyValue } = useSelector((state) => state.CurrencyReducer);
  return (
    <div className='category-wrapper category-slider white-arrow'>
      <Slider {...ShoesCategorySlider}>
        {ShoesFilter.map((el) => {
          return el.children.map((elem, i) => {
            return (
              <div key={i}>
                <div className='category-wrap category-color'>
                  <Link href={'/shop/shop_left_sidebar'}>
                    <img src={`${CommonPath}/${elem.image}`} className='img-fluid' alt='category image' />
                    <div className='category-content category-text t-text'>
                      <h3>{elem.title}</h3>
                      <span>
                        {symbol}
                        {elem.startingPrice * currencyValue} - {symbol}
                        {elem.endiginPrice * currencyValue}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          });
        })}
      </Slider>
    </div>
  );
};

export default CategoryCard;
