/** @format */
import { useCallback, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ActivitiesState } from './../../types/models';
import { ArchiveBtn } from './../../components';
import type { AppDispatch } from './../../store';
import {
  archiveActivities,
  getActivities,
} from './../../store/reducers/activitiesReducer';

type Props = {
  from: string;
  to: string;
};
const ActivityDetail = ({ from, to }: Props) => {
  const [searchParams] = useSearchParams();
  const { idsGroupCalls, data } = useSelector(
    (state: { activities: ActivitiesState }) => state.activities
  );
  const dispatch = useDispatch<AppDispatch>();
  const groupCalls = useMemo(
    () => searchParams.get('groupCalls') || '',
    [searchParams]
  );

  const isEmpty = useMemo(() => {
    return !Object.keys(data).length;
  }, [data]);

  useEffect(() => {
    if (isEmpty) {
      dispatch(getActivities());
    }
  }, []);
  const ids = idsGroupCalls[groupCalls] ?? [];
  const firstCall = ids[0] && data[ids[0]] ? data[ids[0]] : null;
  const archiveCall = useCallback(() => {
    if (firstCall?.isArchived) {
      return;
    }
    dispatch(archiveActivities({ ids, archivedValue: !firstCall?.isArchived }));
  }, [dispatch, ids, firstCall]);

  if (isEmpty || !firstCall) {
    return null;
  }

  const date = firstCall?.date;
  const phonesNumber = [firstCall.from, firstCall.to];
  return (
    <div className='detail'>
      <div className='detail-avatar'>
        <svg
          fill='gray'
          width='80px'
          height='80px'
          viewBox='0 0 32 32'
          id='icon'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            id='_inner-path_'
            data-name='&lt;inner-path&gt;'
            className='cls-1'
            d='M8.0071,24.93A4.9958,4.9958,0,0,1,13,20h6a4.9959,4.9959,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0ZM20.5,12.5A4.5,4.5,0,1,1,16,8,4.5,4.5,0,0,1,20.5,12.5Z'
          />
          <path d='M26.7489,24.93A13.9893,13.9893,0,1,0,2,16a13.899,13.899,0,0,0,3.2511,8.93l-.02.0166c.07.0845.15.1567.2222.2392.09.1036.1864.2.28.3008.28.3033.5674.5952.87.87.0915.0831.1864.1612.28.2417.32.2759.6484.5372.99.7813.0441.0312.0832.0693.1276.1006v-.0127a13.9011,13.9011,0,0,0,16,0V27.48c.0444-.0313.0835-.0694.1276-.1006.3412-.2441.67-.5054.99-.7813.0936-.08.1885-.1586.28-.2417.3025-.2749.59-.5668.87-.87.0933-.1006.1894-.1972.28-.3008.0719-.0825.1522-.1547.2222-.2392ZM16,8a4.5,4.5,0,1,1-4.5,4.5A4.5,4.5,0,0,1,16,8ZM8.0071,24.93A4.9957,4.9957,0,0,1,13,20h6a4.9958,4.9958,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            className='cls-1'
            width='32'
            height='32'
          />
        </svg>
        {firstCall && (
          <div className='detail-numbers'>
            <p>
              From:&nbsp;<b>{phonesNumber[0]}</b>
            </p>
            <p>
              To:&nbsp;<b>{phonesNumber[1]}</b>
            </p>
          </div>
        )}
      </div>
      <div className='detail-info'>
        <ArchiveBtn
          label={`${firstCall.isArchived ? 'Reset ' : 'Archive '} calls`}
          onClick={archiveCall}
          styles='archive-space'
          isArchived={firstCall.isArchived}
        />
        <div className='detail-time'>
          <p>{date}</p>
          {ids.map((id: string) => (
            <p>
              {data[id].callType} <b>{data[id].time}</b>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
