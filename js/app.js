// replace these values with those generated in your TokBox Account
var apiKey = "46612782";
var sessionId = "2_MX40NjYxMjc4Mn5-MTU5MDE4MzUxNTcwNH5IbG84Sm1kQ2U2Y213UG9ib2VjRHBreWV-fg";
var token = "T1==cGFydG5lcl9pZD00NjYxMjc4MiZzaWc9YTg3NjU4ZjlkNTQxYzgxYmM2MDBlMzE3ZGFmZjgwOTlkN2ZjMzJlZTpzZXNzaW9uX2lkPTJfTVg0ME5qWXhNamM0TW41LU1UVTVNREU0TXpVeE5UY3dOSDVJYkc4NFNtMWtRMlUyWTIxM1VHOWliMlZqUkhCcmVXVi1mZyZjcmVhdGVfdGltZT0xNTkwMTgzNTI1Jm5vbmNlPTAuNDQ1NzY4NDA3MzM4MTgwOSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTkwMjA1MTI0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

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
  var apiKey = "46612782";
  var sessionId = "2_MX40NjYxMjc4Mn5-MTU5MDE4MzUxNTcwNH5IbG84Sm1kQ2U2Y213UG9ib2VjRHBreWV-fg";
  var token = "T1==cGFydG5lcl9pZD00NjYxMjc4MiZzaWc9YTg3NjU4ZjlkNTQxYzgxYmM2MDBlMzE3ZGFmZjgwOTlkN2ZjMzJlZTpzZXNzaW9uX2lkPTJfTVg0ME5qWXhNamM0TW41LU1UVTVNREU0TXpVeE5UY3dOSDVJYkc4NFNtMWtRMlUyWTIxM1VHOWliMlZqUkhCcmVXVi1mZyZjcmVhdGVfdGltZT0xNTkwMTgzNTI1Jm5vbmNlPTAuNDQ1NzY4NDA3MzM4MTgwOSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTkwMjA1MTI0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
  

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

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
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
