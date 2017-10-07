'use strict';
const Analysis = require('tago/analysis');
const Services = require('tago/services');

/**
 * The main function used by Tago to run the script.
 * It sends a notification to the account and another one linked to a dashboard.
 * @param  {object} context automatic received from Tago
 */
function run_analysis(context) {
    const notification = new Services(context.token).Notification;

    let title = "Example";
    let message = "This is a account notification example";
    notification.send(title, message).then(context.log).catch(context.log);

    title = "Dashboard Notification";
    message = "This will send notification for the dashboard";
    let ref_id = "593720f04a21870013379975"
    notification.send(title, message, ref_id).then(context.log).catch(context.log);
}
module.exports = new Analysis(run_analysis, 'MY-ANALYSIS-TOKEN-HERE');
