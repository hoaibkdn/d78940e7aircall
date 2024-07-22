/** @format */

import PhoneIcon from './PhoneIcon';
import './activity.css';
type Props = {
  phoneFrom: string;
  phoneTo: string;
  totalMissingTimes?: number;
  time?: [string, string];
  onClick?: (groupByCall: string) => void;
  groupByCall: string;
  isInbound?: boolean;
};

const Activity = ({
  phoneFrom,
  phoneTo,
  totalMissingTimes,
  time,
  onClick = () => {},
  groupByCall,
  isInbound,
}: Props) => {
  return (
    <button className='activity' onClick={() => onClick(groupByCall)}>
      <div className='activity-info'>
        <PhoneIcon isInbound={isInbound} />
        <div className='activity-detail'>
          <div className='activity-phone'>
            <b>{phoneFrom} &nbsp;</b>
            {totalMissingTimes && totalMissingTimes > 1 && (
              <span className='activity-missing-times'>
                <span>{totalMissingTimes}</span>
              </span>
            )}
          </div>
          <div className='activity-text'>
            <p>To: {phoneTo}</p>
          </div>
        </div>
      </div>
      {time && (
        <div className='activity-time'>
          <span className='activity-time-number'>
            {time[0]} <b className='activity-time-tail'>{time[1]}</b>
          </span>
        </div>
      )}
    </button>
  );
};

export default Activity;
