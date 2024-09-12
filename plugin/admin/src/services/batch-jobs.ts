import {
  TranslateBatchCancelJob,
  TranslateBatchJobStatus,
  TranslateBatchPauseJob,
  TranslateBatchResumeJob,
} from '@shared/contracts/translate'
import { translateApi } from './api'

const batchJobsApi = translateApi.injectEndpoints({
  endpoints: (build) => ({
    translateBatchJobStatus: build.query<
      TranslateBatchJobStatus.Response,
      TranslateBatchJobStatus.Request['query']
    >({
      query: ({ documentId }) => ({
        url: `/batch/status/${documentId}`,
        method: 'GET',
      }),
    }),
    translateBatchJobPause: build.mutation<
      TranslateBatchPauseJob.Response,
      TranslateBatchPauseJob.Request['query']
    >({
      query: (documentId) => ({
        url: `/batch/pause/${documentId}`,
        method: 'POST',
      }),
    }),
    translateBatchJobResume: build.mutation<
      TranslateBatchResumeJob.Response,
      TranslateBatchResumeJob.Request['query']
    >({
      query: (documentId) => ({
        url: `/batch/resume/${documentId}`,
        method: 'POST',
      }),
    }),
    translateBatchJobCancel: build.mutation<
      TranslateBatchCancelJob.Response,
      TranslateBatchCancelJob.Request['query']
    >({
      query: (documentId) => ({
        url: `/batch/cancel/${documentId}`,
        method: 'POST',
      }),
    }),
  }),
})

const {
  useTranslateBatchJobStatusQuery,
  useTranslateBatchJobPauseMutation,
  useTranslateBatchJobResumeMutation,
  useTranslateBatchJobCancelMutation,
} = batchJobsApi

export {
  useTranslateBatchJobStatusQuery,
  useTranslateBatchJobPauseMutation,
  useTranslateBatchJobResumeMutation,
  useTranslateBatchJobCancelMutation,
}
