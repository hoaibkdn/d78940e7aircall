/** @format */
import { FC } from 'react';

const Comming: FC<any> = ({ text }: { text: string }) => {
  return (
    <div className='recent-list'>
      <p>
        <i>{text}</i>
      </p>
    </div>
  );
};

export default Comming;
