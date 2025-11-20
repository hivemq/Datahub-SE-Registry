https://support.milesight-iot.com/support/solutions/articles/73000514193-how-to-connect-lorawan-gateway-to-mqtt-broker-

sensecap
LHT65N-E5 LoRaWAN

"data": "AWcAAAJoAA=="

017f6403640a027e64

mqtt pub -t "Lora/LHT65N/buitensensor" -m test
mqtt pub -t "Lora/LHT65N/buitensensor" --message-file ./Lora-payl.json

"fCnt": 0,
"fPort": 85,
"data": "Ef8A5qAAvo="

after conversion : 

"fCnt": 0,
"fPort": 85,
"data": {
"battery": 4.607,
"internalTemp": 23,
"humidity": 80,
"externalTemp": 19

 