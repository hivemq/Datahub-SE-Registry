// Pure JS base64 decoder for LHT65N payload
function decodeLHT65N(base64) {
  // Base64 characters table
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const result = [];
  let acc = 0, bits = 0;

  // Clean base64 string
  base64 = base64.replace(/[^A-Za-z0-9+/]/g, '');

  // Convert base64 to byte array
  for (let i = 0; i < base64.length; i++) {
    acc = (acc << 6) | chars.indexOf(base64[i]);
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      result.push((acc >> bits) & 0xFF);
    }
  }

  const bytes = result;

  const data = {};

  // Battery in volts
  data.battery = ((bytes[0] << 8) | bytes[1]) / 1000;

  // Internal Temperature in °C
  let temp = (bytes[2] << 8) | bytes[3];
  if (temp & 0x8000) temp -= 0x10000;
  data.internalTemp = temp / 10;

  // Humidity in %
  data.humidity = bytes[4] / 2;

  // External Temperature in °C
  let extTemp = (bytes[5] << 8) | bytes[6];
  if (extTemp & 0x8000) extTemp -= 0x10000;
  data.externalTemp = extTemp / 10;

  return data;
}



function transform(publish, context) {

    publish.payload.data = decodeLHT65N(publish.payload.data);
    return publish;
}
