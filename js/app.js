// replace these values with those generated in your TokBox Account
//var apiKey = "46612782";
//var sessionId = "1_MX40NjYxMjc4Mn5-MTU5MTAxOTA1OTk4Nn5SamhMTUpwWHJoTGxaNDdEaGpyajRpdmd-fg";
//var token = "T1==cGFydG5lcl9pZD00NjYxMjc4MiZzaWc9MzQ3N2YzYmY4ZTQxZTg4NTA5NzY1ZjYxMDI4ZDM1MmIzZGRkODE1ZTpzZXNzaW9uX2lkPTFfTVg0ME5qWXhNamM0TW41LU1UVTVNVEF4T1RBMU9UazRObjVTYW1oTVRVcHdXSEpvVEd4YU5EZEVhR3B5YWpScGRtZC1mZyZjcmVhdGVfdGltZT0xNTkxMDIwNTQ0Jm5vbmNlPTAuNzU4OTY5NjU5MzAyNDY3MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTkxMTA2OTQyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
var apiKey = "";
var sessionId = "";
var token = "";

// (optional) add server code here
//initializeSession();

// (optional) add server code here
    var SERVER_BASE_URL = 'http://192.168.15.50:8080';
    fetch(SERVER_BASE_URL + '/v1/chat/cliente/testeConferencia').then(function(res) {
      return res.json()
    }).then(function(res) {
      apiKey = res.apiKey;
      sessionId = res.sessionId;
      token = res.token;
      initializeSession();
    }).catch(handleError);
  


// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }
  // replace these values with those generated in your TokBox Account
