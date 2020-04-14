var express = require( 'express' ); // open express server
var path = require( 'path' ); // reference for path
var open = require( 'open' ); // open site in browser

var port = 3000;
var app  = express(); // instance of express

app.get( '/', function( req, res ){   //routes
    
    // send and join the code in the file inside src folder and in index.html file.
    res.sendFile( path.join( __dirname, '../src/index.html'));
    
});


app.listen( port, function(err) {
    if( err) {
        console.log( err );
    } else{
        open( 'http://localhost:' + port );
    }
});