import { NotificationConfig, useNotification } from '@strapi/strapi/admin'
import { useIntl } from 'react-intl'

export function useAlert() {
  const { toggleNotification } = useNotification() // HERE
  const { formatMessage } = useIntl()
  const handleNotification = ({
    type = 'info',
    id,
    defaultMessage,
    link,
    blockTransition = true,
  }: {
    type?: 'info' | 'warning' | 'success' | 'danger' | undefined
    id: string
    defaultMessage?: string
    link?: NotificationConfig['link']
    blockTransition?: boolean
  }) => {
    toggleNotification({
      type,
      message: formatMessage({
        id,
        defaultMessage,
      }),
      link,
      blockTransition,
      // onClose: () => localStorage.setItem('STRAPI_UPDATE_NOTIF', 'true'),
    })
  }

  return {
    handleNotification,
  }
}

export default useAlert