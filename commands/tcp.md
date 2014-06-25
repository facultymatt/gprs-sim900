// is network connected?
AT+CGATT?

// This is to check if SIM is unlocked.
AT+CPIN?

// This checks if SIM is registered or not
AT+CREG?

// Reset the IP session if any
AT+CIPSHUT=?

// Check if the IP stack is initialized
AT+CIPSTATUS

// setup one IP connection
AT+CIPMUX=0

// apn
AT+CSTT="epc.tmobile.com","",""

// Now bring up the wireless.
AT+CIICR

// Get the local IP address.
AT+CIFSR

// Start the connection, TCP, domain name, port
AT+CIPSTART= "TCP" , "http://sp-push-server-demo.nodejitsu.com", "80" 

AT+CIPSTART= "TCP" , "echo.websocket.org", "80"


// send data
AT+CIPSEND testing --end [['testing'],['> ']]