module.exports = function( input ){
  // Get prototype
  var i = 1, columnBorder, headers, out = [];;

  columnBorder = input.substring(
    input.indexOf('+') + 1
  );

  columnBorder = '+' + columnBorder.substring(
    0, columnBorder.indexOf('+') + 1
  );

  input = input.split('|').map( function(v){
    return v.trim();
  });

  while ( input[ i++ ].indexOf( columnBorder ) == -1 && input.length > i );

  headers = input.slice( 1, i - 1 );

  input = input.slice(i, input.length - 1);

  var obj = {};
  input.forEach( function ( val, i ){
    if ( i % (headers.length + 1) === (headers.length) ) {
      out.push( obj );
      return obj = {};
    }

    obj[ headers[ i % (headers.length + 1) ] ] = Number.isNaN(
      parseFloat( val )
    ) ? val : parseFloat( val );
  });

  return out;
};