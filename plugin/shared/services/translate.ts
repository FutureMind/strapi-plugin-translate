import { BatchTranslateJob } from '@shared/types/batch-translate-job'
import { TranslatableField } from '@shared/types/utils'
import { Data, Modules, UID } from '@strapi/strapi'

export interface BatchTranslateManager {
  bootstrap: () => Promise<void>
  submitJob: (
    params: Pick<
      BatchTranslateJob,
      | 'contentType'
      | 'sourceLocale'
      | 'targetLocale'
      | 'entityIds'
      | 'autoPublish'
    >
  ) => Promise<BatchTranslateJob>
  pauseJob: (documentId: Data.DocumentID) => Promise<BatchTranslateJob>
  resumeJob: (documentId: Data.DocumentID) => Promise<BatchTranslateJob>
  cancelJob: (documentId: Data.DocumentID) => Promise<BatchTranslateJob>
  destroy: () => Promise<void>
}

export interface TranslateService {
  batchTranslateManager: BatchTranslateManager
  estimateUsage: <TSchemaUID extends UID.ContentType>(params: {
    data: Modules.Documents.Document<TSchemaUID>
    fieldsToTranslate: Array<TranslatableField>
  }) => Promise<number>
  translate: <TSchemaUID extends UID.ContentType>(params: {
    data: Modules.Documents.Document<TSchemaUID>
    sourceLocale: string
    targetLocale: string
    fieldsToTranslate: Array<TranslatableField>
    priority?: number
  }) => Promise<Modules.Documents.Document<TSchemaUID>>
  batchTranslate: (
    params: Pick<
      BatchTranslateJob,
      | 'contentType'
      | 'sourceLocale'
      | 'targetLocale'
      | 'entityIds'
      | 'autoPublish'
    >
  ) => Promise<BatchTranslateJob>
  batchTranslatePauseJob: (id: Data.DocumentID) => Promise<BatchTranslateJob>
  batchTranslateResumeJob: (id: Data.DocumentID) => Promise<BatchTranslateJob>
  batchTranslateCancelJob: (id: Data.DocumentID) => Promise<BatchTranslateJob>
  batchUpdate: (params: {
    updatedEntryIDs: Data.DocumentID[]
    sourceLocale: string
  }) => Promise<{ result: 'success' }>
  contentTypes: () => Promise<{
    contentTypes: {
      contentType: UID.ContentType
      collection: string
      localeReports: Record<
        string,
        { count: number; complete: boolean; job: any }
      >
    }[]
    locales: { code: string; name: string }[]
  }>
}