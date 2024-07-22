/** @format */
import { useEffect, FC, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useNavigateParams from './../../hooks/useNavigateParam';
import type { AppDispatch } from './../../store';
import {
  Activity,
  SectionTitle,
  Spinner,
  ArchiveBtn,
} from './../../components';
import {
  getActivities,
  resetActivities,
} from './../../store/reducers/activitiesReducer';
import { ActivitiesState, LIST_TYPE } from './../../types/models';

const ListActivities: FC<any> = ({
  type = LIST_TYPE.INBOX,
}: {
  type: LIST_TYPE.INBOX | LIST_TYPE.ARCHIVED;
}) => {
  const { uniqueDates, idsGroupDate, idsGroupCalls, data, loading } =
    useSelector((state: { activities: ActivitiesState }) => state.activities);
  const dispatch = useDispatch<AppDispatch>();
  const navigateParams = useNavigateParams();
  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const openDetailActvity = useCallback(
    (groupCalls: string) => {
      navigateParams('/recent/activity-detail', { groupCalls });
    },
    [navigateParams]
  );

  const resetAllActivities = useCallback(() => {
    dispatch(resetActivities());
  }, []);

  const isEmptyArchivedActivity = useMemo(() => {
    return Object.keys(data).findIndex((id) => data[id].isArchived) < 0;
  }, []);

  if (loading === 'pending') {
    return (
      <div className='loading'>
        <Spinner />
      </div>
    );
  }
  if (type === LIST_TYPE.ARCHIVED && isEmptyArchivedActivity) {
    return (
      <div className='recent-list'>
        <p>
          <i>No archived activities</i>
        </p>
      </div>
    );
  }
  // const
  return (
    <div className='recent-list'>
      {type === LIST_TYPE.ARCHIVED && (
        <ArchiveBtn
          label={'Reset all activities'}
          onClick={resetAllActivities}
          styles='archive-vertical-space'
        />
      )}
      {uniqueDates.map((date) => {
        const groupByDate = idsGroupDate[date];
        return (
          <>
            {type === LIST_TYPE.INBOX && <SectionTitle title={date} />}
            {groupByDate.map((groupByCall) => {
              const calls = idsGroupCalls[groupByCall];
              const callActivity = data[calls[0]];
              if (type === LIST_TYPE.ARCHIVED && !callActivity.isArchived) {
                return null;
              }
              return (
                <Activity
                  phoneFrom={callActivity.from}
                  phoneTo={callActivity.to}
                  time={callActivity.time}
                  onClick={openDetailActvity}
                  groupByCall={groupByCall}
                  totalMissingTimes={calls.length}
                  isInbound={callActivity.direction === 'inbound'}
                />
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default ListActivities;
