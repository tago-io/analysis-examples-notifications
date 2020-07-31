const { Analysis, Services, Utils } = require("@tago-io/sdk");

/**
 * The main function used by Tago to run the script.
 * It sends a notification to the account and another one linked to a dashboard.
 */
async function sendNotification(context) {
  const env_var = Utils.envToJson(context.environment);

  const notification = new Services({ token: context.token }).Notification;

  try {
    const service_response = await notification.send({
      message: env_var.message,
      title: env_var.title,
      ref_id: env_var.dashboard_id || env_var.bucket_id || undefined,
    });

    context.log(service_response);
  } catch (error) {
    context.log(error);
  }
}

module.exports = new Analysis(sendNotification);

// To run analysis on your machine (external)
// module.exports = new Analysis(sendNotification, { token: "YOUR-TOKEN" });
