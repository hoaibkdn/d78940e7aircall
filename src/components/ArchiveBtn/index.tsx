/** @format */
import { memo } from 'react';
import ArchiveIcon from './ArchiveIcon';
import TickIcon from './TickIcon';
import Spinner from '../Spinner';
import './archiveBtn.css';
import { ActivitiesState } from '@/types/models';
import { useSelector } from 'react-redux';

type Props = {
  label: string;
  onClick: () => void;
  styles?: string;
  isArchived?: boolean;
};
const ArchiveBtn = ({ label, onClick, styles, isArchived }: Props) => {
  const { archiveLoading } = useSelector(
    (state: { activities: ActivitiesState }) => state.activities
  );
  return (
    <button className={'archive-btn ' + styles} onClick={onClick}>
      {archiveLoading === 'pending' ? (
        <Spinner />
      ) : isArchived ? (
        <TickIcon />
      ) : (
        <ArchiveIcon />
      )}
      <b>{label}</b>
    </button>
  );
};

export default memo(ArchiveBtn);
