const scanner = require('sonarqube-scanner');
scanner( 
  { 
  serverUrl: "http://localhost:9000", 
  login:"admin", 
  senha:"admin", 
  options: { 
    "sonar.sources": "./src" 
  }, 
}, 
() => processo .exit() 
);