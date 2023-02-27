import Link from 'next/link';

export const headDashboardColumn = [
  {
    selector: (row) => row.image,
    name: 'Image',
  },
  {
    selector: (row) => row.order,
    name: 'Order Id',
  },
  {
    selector: (row) => row.product,
    name: 'Product Details',
  },
  {
    selector: (row) => row.status,
    name: 'Status',
  },
  {
    selector: (row) => row.price,
    name: 'Price',
  },
  {
    selector: (row) => row.view,
    name: 'View',
  },
];

export const headDashboardData = [
  {
    image: (
      <Link href={'/product/product_left_sidebar/1'}>
        <img src='/assets/images/fashion/product/front/1.jpg' alt='fashion' height={70} />
      </Link>
    ),
    order: <p className='mt-3'>#4545774</p>,
    product: <p className='fs-6 mt-3'>Men's Sweatshirt</p>,
    status: <p className='success-button mt-3'>Shipped</p>,
    price: <p className='theme-color fs-6 mt-3'>$25.54</p>,
    view: (
      <a href='#javascript'>
        <i className='far fa-eye'></i>
      </a>
    ),
  }
];
