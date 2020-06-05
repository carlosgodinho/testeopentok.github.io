// replace these values with those generated in your TokBox Account
var apiKey = "46612782";
var sessionId = "1_MX40NjYxMjc4Mn5-MTU5MTM5ODQxNjk0OX42YXpBaHpqcHdzd0NzZUNuYmZPOTdtZkd-fg";
var token = "T1==cGFydG5lcl9pZD00NjYxMjc4MiZzaWc9ZjRmMWYxNzBhNmM0MmQwNTg2NTFhMDNiOWRiZmQ0OTUzMjQyNjgyNDpzZXNzaW9uX2lkPTFfTVg0ME5qWXhNamM0TW41LU1UVTVNVE01T0RReE5qazBPWDQyWVhwQmFIcHFjSGR6ZDBOelpVTnVZbVpQT1RkdFprZC1mZyZjcmVhdGVfdGltZT0xNTkxMzk4NDQxJm5vbmNlPTAuOTEyNzI0MzMyOTA1NTkwMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTkzOTkwNDQwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

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
