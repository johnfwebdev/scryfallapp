const fs = require('fs')

module.exports = errorHandler = (inboundError, errorTo, errorFrom, dateAndTime) => {
  let errorBody = {
    'Error Message': inboundError,
    'Log': errorTo,
    'From Location': errorFrom,
    'Timestamp': dateAndTime
  }
  let logFileExists = (err) => {
    let result = true
    fs.stat('./logs/' + errorTo + '.txt', (err, stat) => {
      if(err == 'ENOENT') { return false }
      if(err == 'null') { return true }
      if(stat !== null){
        console.log(stat)
      }
    })
    if (err) { 
      console.log(err.code)
      return err.code
    }
    return 'Unrecoverable Error: fileExists() failed to complete'
  }
  if (logFileExists()) {
    fs.mkdir('./logs', (err) => console.log(err))
    fs.appendFile('./logs/' + errorTo + '.txt', JSON.stringify(errorBody) + '\r\n', 'utf8', (err) => {
      if (err !== null){
        console.log(err)
      };
    })
    return
  }
  
  console.log('Unrecoverable Error: errorHandler() failed to complete')
}