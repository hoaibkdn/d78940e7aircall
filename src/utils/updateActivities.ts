/** @format */

import { ActivityModel } from '@/types/models';

const updateActivities = (ids: string[], data: Record<string, ActivityModel>, value?: boolean) => {
  for (let i = 0; i < ids.length; i++) {
    data[ids[i]].isArchived = !!value;
  }
};

export default updateActivities;
