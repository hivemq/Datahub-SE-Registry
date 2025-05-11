# SE-Datahub Module Registry in GitHub

HiveMQ datahub modules

This repo is meant as a central place to keep, develop and demonstrate HiveMQ datahub modules build and maintained by the Solution engineering department.

add the following section to your brokers config file to enable this Registry:

```xml
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

```

Module sources and build pipline to be added (KS)
