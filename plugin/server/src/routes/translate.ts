export default [
  {
    method: 'POST',
    path: '/entity',
    handler: 'translate.translateEntity',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.translate'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/batch',
    handler: 'translate.batchTranslate',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/report',
    handler: 'translate.report',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/batch/status/:id',
    handler: 'translate.batchTranslateJobStatus',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/batch/pause/:id',
    handler: 'translate.batchTranslatePauseJob',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/batch/resume/:id',
    handler: 'translate.batchTranslateResumeJob',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/batch/cancel/:id',
    handler: 'translate.batchTranslateCancelJob',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/batch-update',
    handler: 'translate.translateBatchUpdate',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/batch-update/updates',
    handler: 'updated-entry.find',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/batch-update/dismiss/:id',
    handler: 'updated-entry.delete',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          config: { actions: ['plugin::translate.batch-translate'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/usage/estimate',
    handler: 'translate.usageEstimate',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'POST',
    path: '/usage/estimate-collection',
    handler: 'translate.usageEstimateCollection',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
]