# SE-Datahub Module Registry in GitHub

HiveMQ datahub modules

Successfully loaded Data Hub modules registry 'HiveMQ:1' from url 'https://releases.hivemq.com/modules/registry.json'.

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

# enable API
add the following to your config file:
```xml
    <rest-api>
        <enabled>true</enabled>
        <listeners>
            <http>
                <port>8888</port>
                <bind-address>127.0.0.1</bind-address>
            </http>
        </listeners>
    </rest-api>
```

# enable the 5 hr test-window for Datahub:
```curl  -X POST localhost:8888/api/v1/data-hub/management/start-trial```
