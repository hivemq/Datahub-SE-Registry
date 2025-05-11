# SE-Datahub Module Registry in GitHub

HiveMQ datahub modules

**add to broker config file to enable:**

<data-hub>
    <modules>
        <registries>
            <remote>
                <enabled>true</enabled>
                <name>HiveMQ SE Registry</name>
                <id>SE-git-registry</id>
                <url>https://raw.githubusercontent.com/hivemq/Datahub-SE-Registry/refs/heads/main/registry.json</url>
            </remote>
        </registries>
    </modules>
</data-hub>
