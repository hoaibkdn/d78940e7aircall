/** @format */

const PhoneIcon = ({ isInbound = true }: { isInbound?: boolean }) => {
  return (
    <svg
      version='1.1'
      id='Icons'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      className='phone-icon'>
      {isInbound ? (
        <>
          <path
            className='st0'
            d='M17.6,18.8c-0.4,0.4-0.8,1-1.1,1.5c-1.8-1.4-3.4-3.1-4.8-4.8c0.6-0.3,1.1-0.7,1.5-1.1c2-2,1.3-4.6-0.7-6.6
	S8,5,5.9,7.1s-2.3,5.7-0.7,8c2.9,4.4,7.3,8.8,11.7,11.7c2.4,1.6,6,1.3,8-0.7s1.3-4.6-0.7-6.6S19.6,16.7,17.6,18.8z'
          />
          <polyline className='st0' points='26,12 20,12 20,6 ' fill='red' />
          <line className='st0' x1='27' y1='5' x2='20' y2='12' />
        </>
      ) : (
        <>
          <path
            className='st0'
            d='M17.6,18.8c-0.4,0.4-0.8,1-1.1,1.5c-1.8-1.4-3.4-3.1-4.8-4.8c0.6-0.3,1.1-0.7,1.5-1.1c2-2,1.3-4.6-0.7-6.6
	S8,5,5.9,7.1s-2.3,5.7-0.7,8c2.9,4.4,7.3,8.8,11.7,11.7c2.4,1.6,6,1.3,8-0.7s1.3-4.6-0.7-6.6S19.6,16.7,17.6,18.8z'
          />
          <polyline className='st0' points='20,6 26,6 26,12 ' />
          <line className='st0' x1='19' y1='13' x2='26' y2='6' />
        </>
      )}
    </svg>
  );
};

export default PhoneIcon;
