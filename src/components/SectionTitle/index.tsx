/** @format */
import './sectionTitle.css';

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className='section-group'>
      <b className='section-title'>{title}</b>
    </div>
  );
};

export default SectionTitle;
