/** @format */

import type { Activity } from '@/types/activity';
import type { ActivityModel } from '@/types/models';

const convertPhone = (phone: number) => {
  const phoneStr = String(phone)
  const phoneLength = phoneStr.length
  let convertedPhone = ''
  if(phoneLength < 10) {
    return String(phone)
  }
  convertedPhone += '+'
  for(let i = 0; i < phoneLength; i++) {
    if(i < 2) {
      convertedPhone += phoneStr.charAt(i)
      continue;
    }
    if(i === 2) {
      convertedPhone += ' '
      convertedPhone += phoneStr.charAt(i) 
    }
    if(i % 2 === 1) {
      convertedPhone += ' '
      convertedPhone += phoneStr.charAt(i)  
      convertedPhone += phoneStr.charAt(i+1)
    }
  }
  return convertedPhone 
}

const convertDate = (date: Date) => {
  const monthsYear = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];;
  return `${monthsYear[date.getMonth()].toUpperCase()}, ${date.getDate()} ${date.getFullYear()}` 
}

export const convertActivity = (actv: Activity): ActivityModel => {
  const createdDate = new Date(actv.created_at);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const hours = createdDate.getHours();
  const convertedHours = hours <= 12 ? hours : hours - 12;
	
  return {
    direction: actv.direction,
    from: convertPhone(actv.from),
    to: convertPhone(actv.to),
    via: actv.via,
    duration: actv.duration,
    isArchived: actv.is_archived,
    callType: actv.call_type,
    id: actv.id,
    date: convertDate(createdDate), 
    day: daysOfWeek[createdDate.getDay()],
    time: [`${convertedHours}:${createdDate.getMinutes()}`, (hours <= 12 ? 'AM' : 'PM')],
  };
};

