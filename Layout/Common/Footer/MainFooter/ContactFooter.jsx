import { Col } from 'reactstrap';
import { Address, Email, phone, VoxoMail, mobileno, ActualAddress, CommonPath } from '../../../../Components/Constant';
import { LogoSvg } from '../../../../Data/SVG';

const ContactFooter = () => {
  return (
    <>
      <Col xl='3' lg='4' md='6'>
        <div className='footer-contact'>
          <div className='brand-logo'>
            <a href='#javascript' className='footer-logo'>
              <LogoSvg />
              <img src={`${CommonPath}/logo.png`} className='img-fluid' alt='logo' />
            </a>
          </div>
          <ul className='contact-lists'>
            <li>
              <span>
                <b>{phone}:</b>
                <span className='font-light'>{mobileno}</span>
              </span>
            </li>
            <li>
              <span>
                <b>{Address}:</b>
                <span className='font-light'> {ActualAddress}</span>
              </span>
            </li>
            <li>
              <span>
                <b>{Email}:</b>
                <span className='font-light'> {VoxoMail}</span>
              </span>
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};
export default ContactFooter;
