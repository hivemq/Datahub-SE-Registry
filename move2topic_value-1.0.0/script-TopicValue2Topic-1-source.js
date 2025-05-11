 function transform(publish, context) {


  publish.payload.timestamp = new Date().toJSON();

  if (!publish.payload.topic) {
    publish.topic = "DeadLetterBox/" + context.clientId;
    // publish.payload.timestamp = new Date().toJSON();
    publish.payload.mqtt_clientID = context.clientId;
  }
  else {
    publish.topic = publish.payload.topic;
  }
  return publish;
 }