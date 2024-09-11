import { errors } from '@strapi/utils'
import { Entity } from '@strapi/strapi/admin'

export interface UpdatedEntry extends Entity {
  contentType: string
  groupID: string
  localesWithUpdates: string[]
}

/**
 * GET /translate/batch-update/updates - Get all updated-entries
 */
export declare namespace GetUpdatedEntries {
  export interface Request {
    query: {}
    body: {}
  }

  export type Response =
    | { data: UpdatedEntry[] }
    | {
        data: null
        error: errors.ApplicationError
      }
}

/**
 * DEL /translate/batch-update/dismiss/:id - Delete a single updated-entry
 */
export declare namespace DeleteUpdatedEntry {
  export interface Request {
    query: {}
    body: {}
  }

  export interface Params {
    id: UpdatedEntry['id']
  }

  export type Response =
    | { data: UpdatedEntry }
    | {
        data: null
        error: errors.ApplicationError
      }
}
