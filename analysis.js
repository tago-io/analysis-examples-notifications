/* 
 * Analysis Example
 * Send Notification
 * 
 * Send push notifications to your Tago account
 * 
 * Instructions
 * To run this analysis you need to add a device token to the environment variables,
 * To do that, go to your device, then token and copy your token.
 * Go the the analysis, then environment variables, 
 * type message on key, and paste the message on you woult like to send on value.
 * Next, add another environment variable. 
 * Type title on key and the desired title in value.
 */

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
