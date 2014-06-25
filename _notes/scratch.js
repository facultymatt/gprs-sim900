GPRS.prototype.connectToWebsite = function(webAddress, cb) {
  
  var self = this;

  /*
  AT+CGATT?
  AT+CSNS=4
  AT+CSTT="epc.tmobile.com","",""
  AT+CIICR
  AT+CIFSR
  AT+CIPSTART="TCP","http://google.com",""
  AT+CIPSEND
  AT+CIPCLOSE
  AT+CIPSHUT
  */
  
    var self = this;
    var commands  = [
      'AT+CGATT?', 
      'AT+CSNS=4', 
      'AT+CSTT="epc.tmobile.com","",""',
      'AT+CIICR',
      //'AT+CIFSR',
      'AT+CIPSTART="TCP","www.google.com",""',
      'AT+CIPSEND',
      'AT+CIPCLOSE',
      'AT+CIPSHUT'
    ];
    var patiences = [240000, 240000, 240000, 240000, 240000, 240000, 240000, 240000];
    var replies = [
      [ 'AT+CGATT?', '+CGATT: 1', 'OK' ], 
      ['AT+CSNS=4', 'OK'], 
      ['AT+CSTT="epc.tmobile.com","",""', 'OK'],
      ['AT+CIICR', 'OK'],
      //['AT+CIFSR', 'OK'],
      ['AT+HTTPPARA="URL","www.google.com"', 'OK'],
      ['AT+CIPSEND', '>'],
      ['AT+CIPCLOSE', 'OK'],
      ['AT+CIPSHUT', 'OK']
    ];

    self._chain(commands, patiences, replies, function (errr, data) {
      console.log('DONE!!!');
      console.log(data);
    });

}