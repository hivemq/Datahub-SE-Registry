## Sensecap LHT65N-E5 LoRaWAN temperature sensor

"data": "AWcAAAJoAA==" / 017f6403640a027e64

test example:

mqtt pub -t "Lora/LHT65N/buitensensor" --message-file ./Lora-payl.json

```"fCnt": 0,
"fPort": 85,
"data": "Ef8A5qAAvo="
```

after conversion :

```"fCnt": 0,
"fPort": 85,
"data": {
"battery": 4.607,
"internalTemp": 23,
"humidity": 80,
"externalTemp": 19 
}
```

