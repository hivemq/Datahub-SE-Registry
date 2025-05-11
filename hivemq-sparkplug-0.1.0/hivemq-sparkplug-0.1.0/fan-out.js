function transform(publish, context) {
	const topicParts = publish.topic.split("/")
    const topicRoot = topicParts[1];
    const EoN = topicParts[3];
    const device = topicParts[4];
	const newTopic = `${topicRoot}/${EoN}/${device}`;

	for (const metric of publish.payload.metrics) {
		const payload = metric;
		const topic = newTopic + '/metric/' + metric.name.toLowerCase();
		context.branches['fanout'].addPublish({ payload, topic });
	}

	publish.topic = newTopic;
	return publish;
}