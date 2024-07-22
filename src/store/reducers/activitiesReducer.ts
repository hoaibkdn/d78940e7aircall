/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ActivitiesState } from '@/types/models';
import type { Activity } from '@/types/activity';
import { convertActivity } from '../../transform/convertActivity';
import updateActivities from '../../utils/updateActivities';

const BASE_URL = 'https://aircall-backend.onrender.com/';

const initialState: ActivitiesState = {
  uniqueDates: [],
  idsGroupDate: {},
  idsGroupCalls: {},
  data: {},
  loading: 'idle',
  archiveLoading: 'idle',
};

export const getActivities = createAsyncThunk(
  'activities/getActivities',
  async (thunkAPI) => {
    const res = await fetch(BASE_URL + 'activities').then((data) =>
      data.json()
    );
    return res;
  }
);

export const archiveActivities = createAsyncThunk(
  'activity/archiveActivities',
  async (
    activitiesInfo: { ids: string[]; archivedValue: boolean },
    thunkAPI
  ) => {
    const request = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        is_archived: activitiesInfo.archivedValue,
      }),
    };
    const archivePromises = activitiesInfo.ids.map((id) =>
      fetch(BASE_URL + 'activities/' + id, request)
    );
    return Promise.all(archivePromises).then((data) => data);
  }
);

export const resetActivities = createAsyncThunk(
  'activity/resetActivities',
  async (thunkAPI) => {
    const res = await fetch(BASE_URL + 'reset', { method: 'PATCH' }).then(
      (data) => {
        if (data) {
          return 200;
        }
        return 200;
      }
    );
    return res;
  }
);

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get Activity
    builder.addCase(getActivities.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(getActivities.fulfilled, (state, action) => {
      const activities: Activity[] = action.payload || [];
      const sameDate: Record<string, Array<string>> = {};
      const sameCall: Record<string, Array<string>> = {};
      for (let i = 0; i < activities.length; i++) {
        const actv = activities[i];
        if (!state.data[actv.id]) {
          const convertedAct = convertActivity(actv);
          state.data[actv.id] = convertedAct;
          const call = `${actv.from}-${actv.to}`;
          if (sameDate[convertedAct.date]) {
            if (!sameCall[call]) {
              sameDate[convertedAct.date].push(call);
              sameCall[call] = [actv.id];
            } else {
              sameCall[call].push(actv.id);
            }
          } else {
            sameDate[convertedAct.date] = [call];
            sameCall[call] = [actv.id];
            state.uniqueDates.push(convertedAct.date);
          }
        }
      }
      state.idsGroupDate = { ...state.idsGroupDate, ...sameDate };
      state.idsGroupCalls = { ...state.idsGroupCalls, ...sameCall };
      state.loading = 'succeeded';
    });
    builder.addCase(getActivities.rejected, (state, action) => {
      state.loading = 'failed';
    });

    // patch activity
    builder.addCase(archiveActivities.fulfilled, (state, action) => {
      const archivedIds = action.meta.arg.ids || [];
      updateActivities(archivedIds, state.data, true);
      state.archiveLoading = 'succeeded';
    });
    builder.addCase(archiveActivities.rejected, (state, action) => {
      state.archiveLoading = 'failed';
    });
    builder.addCase(archiveActivities.pending, (state, action) => {
      state.archiveLoading = 'pending';
    });
    builder.addCase(resetActivities.fulfilled, (state, action) => {
      updateActivities(Object.keys(state.data), state.data);
      state.archiveLoading = 'succeeded';
    });
    builder.addCase(resetActivities.rejected, (state, action) => {
      state.archiveLoading = 'failed';
    });
    builder.addCase(resetActivities.pending, (state, action) => {
      state.archiveLoading = 'pending';
    });
  },
});

export const activitiesReducer = activitiesSlice.reducer;
