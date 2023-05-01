const fs = require('fs');

async function getAllMail(req, res) {

  const text = fs.readFileSync(`./uploads/${req.files[0].filename}`, 'utf-8');

  const stationRegex = /Station:\s+(.*?)\s+\(Nsts,AMB-8059\s+S\/N\s+(\w+)\)/g;
  const coordsRegex = /Latitude: (\d+\.\d+) N\s+Longitude: (\d+\.\d+) E/g;
  const dataRegex = /(\d{2}\/\d{2}\/\d{4});(\d{2}:\d{2}:\d{2});;(\d+\.\d+);(\d+\.\d+);(\d+\.\d+);(\d+\.\d+);(\d+);(\d+);/g;
  
  let matches;
  let station = {};
  let coordinates = {};
  let data = [];
  
  // Extract Station Information
  matches = stationRegex.exec(text);
  station.name = matches[1];
  station.serialNumber = matches[2];
  
  // Extract Coordinates Information
  matches = coordsRegex.exec(text);
  coordinates.latitude = matches[1];
  coordinates.longitude = matches[2];
  
  // Extract Data
  while (matches = dataRegex.exec(text)) {
    let date = matches[1];
    let time = matches[2];
    let rms1 = matches[3];
    let rms2 = matches[4];
    let peak1 = matches[5];
    let peak2 = matches[6];
    let current = matches[7];
    let rh = matches[8];
  
    data.push({
      date,
      time,
      rms1,
      rms2,
      peak1,
      peak2,
      current,
      rh
    });
  }
  
  // Create JSON object
  let result = {
    station,
    coordinates,
    data
  };

  
  // Write JSON object to file
  fs.writeFileSync('fullday.json', JSON.stringify(result));
  res.json(result)
}

module.exports = {
  getAllMail,
};

// Example usage
// getAllMail().then(() => {
//   console.log('goooooooooooooood');
// }).catch((error) => {
//   console.error('bolqqq bnaaaa sda', error);
// });
