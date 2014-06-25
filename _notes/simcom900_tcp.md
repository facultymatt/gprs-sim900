# Connection to IP or Web address with UDP or TCP

These method were pulled from the [SimCom900 Command Document](http://wm.sim.com/upfile/2013424141114f.pdf). They document commands used to send data, for example connecting to a website. 

These proved to be less useful then using the direct HTTP commands. 

## connect to single IP

**Command**

AT+CIPSTART=<mode>,<IPAddress>,<port>
or
AT+CIPSTART=<mode>,<domain name>,<port>

**Responses**

OK 
+CME
ERROR <err> error related to ME function
ALREADY CONNECT device is already connected
CONNECT OK successful connection (how is this different from OK)

**Parameters**
<mode> string, "TCP" or "UCP"
<ip address> string
<port> string
<state> 

**Notes**
This command will only work if user in in state IP INITIAL or IP STATUS.
If the state is not this, we must process AP+CIPSHUT then try to establish connection



## Send data through TCP or UDP

Test Commands
AP+CIPSEND=?

Responses
+CIPSEND: <length>

parameters
See write commend? 



Read Command
AT+CIPSEND?

Response
+CIPSEND: <size>



Write Command
AT+CIPSEND=<length>

Responses
+CME ERROR <err>
SEND OK, when reading data is off
DATA ACCEPT: <length>, when reading data is on (do we need to chain?)
CME FAIL



Execution command
AT+CIPSEND

Notes
This can only be used when connection is already established




## Close connection

Test Commands
AT+CIPCLOSE=?

Response 
OK



Write Command
AT+CIPCLOSE=<n>

Parameters
<n> 0, slow close
<n> 1, quick close

Responses
CLOSE OK
ERROR






## Deactivate GPRS PDP context

Execution command
AT+CIPSHUT

Response
SHUT OK
ERROR

Notes
After close, the state is IP INITIAL


