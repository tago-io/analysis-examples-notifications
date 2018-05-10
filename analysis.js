'use strict';
const Analysis = require('tago/analysis');
const Utils = require('tago/utils');
const Services = require('tago/services');

/**
 * The main function used by Tago to run the script.
 * It sends a notification to the account and another one linked to a dashboard.
 * @param  {object} context automatic received from Tago
 */
function sendNotification(context) {
  const env_var = Utils.env_to_obj(context.environment);
  const message = env_var.message;
  const title = env_var.title;
  const ref_id = env_var.dashboard_id || env_var.bucket_id || undefined;

  const Notification = new Services(context.token).Notification;
  Notification.send(title, message, ref_id).then(context.log).catch(context.log);
}

module.exports = new Analysis(sendNotification, 'MY-ANALYSIS-TOKEN-HERE');
