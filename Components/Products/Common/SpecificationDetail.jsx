import React from 'react';
import { SpecificationColumn, SpecificationDatas } from '../../../Data/SpecificationData';
import { SpecifyDescription } from '../../Constant';
import DataTables from '../../Element/DataTable';

const SpecificationDetail = () => {
  return (
    <div className='pro mb-4'>
      <p className='font-light'>{SpecifyDescription}</p>
      <div className='table-responsive'>
        <DataTables data={SpecificationDatas} columns={SpecificationColumn} />
      </div>
    </div>
  );
};

export default SpecificationDetail;
