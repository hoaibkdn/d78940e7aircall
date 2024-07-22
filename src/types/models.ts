export interface ActivityModel {
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  via: number;
  duration: number;
  isArchived: boolean;
  callType: 'answered' | 'missed';
  id: string;
	day: string;
  date: string;
  time: [string, string];
}


export type ActivitiesState = {
  uniqueDates: Array<string>,
  idsGroupDate: Record<ActivityModel['id'], Array<ActivityModel['id']>>,
  idsGroupCalls: Record<string, Array<ActivityModel['id']>>
  data: Record<ActivityModel['id'], ActivityModel>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  archiveLoading: 'idle' | 'pending' | 'succeeded' | 'failed'; 
};

export enum LIST_TYPE {
  INBOX = 'INBOX',
  ARCHIVED = 'ARCHIVED'
}