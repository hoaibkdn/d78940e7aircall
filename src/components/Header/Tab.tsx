/** @format */
import { memo } from 'react';
type Props = {
  isActive?: boolean;
  onClick: () => void;
  label: string;
};

const Tab = ({ isActive = false, label, onClick }: Props) => {
  return (
    <button className={`tab ${isActive ? 'tab-active' : ''}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export default memo(Tab);
