import { AlertMessage } from '../models/message-alert';

enum alertMessagesTypes {
  success = 'alert alert-success',
  info = 'alert alert-info',
  warning = 'alert alert-warning',
  danger = 'alert alert-danger'
}

export const createAlertMessage = (message: string, type: string): AlertMessage => ({
  message,
  type,
  style: alertMessagesTypes[type]
});