// أبل 1230
// alf => 1 , baa => 2  , lam 30
var singleDigit = 'ابجدهوزحط';
var doubleDigits = 'حطيكلمنسعفص';
var tipple = 'قرشتثخذضظ'
var quad = "غ"; //100

var table = {
    ...singleDigit.split( '' ).reduce( ( acc, i, index ) => {
        return { ...acc, [ index + 1 ]: i }
    }, {} ),
    ...doubleDigits.split( '' ).reduce( ( acc, i, index ) => {
        return { ...acc, [ ( index + 1 ) * 10 ]: i }
    }, {} ),
    ...tipple.split( '' ).reduce( ( acc, i, index ) => {
        return { ...acc, [ ( index + 1 ) * 100 ]: i }
    }, {} ),
    1000: quad
}
var values = Object.keys( table ).reduce( ( acc, key ) => ( { ...acc, [ table[ key ] ]: key } ), {} )

var calculateIndex = function ( _remaining, output = '' ) {

    if ( _remaining > 1000 ) {
        var quads = +( _remaining / 1000 ).toFixed();
        for ( var i = 0; i < quads; i++ ) {
            output = output + table[ 1000 ];
        }
        return calculateIndex( _remaining % 1000, output );
    } else if ( _remaining > 100 ) {
        var hundreds = +( _remaining / 100 ).toFixed();
        output = output + table[ 100 * hundreds ];
        return calculateIndex( _remaining % 100, output );
    } else if ( _remaining >= 10 ) {
        var tens = +( _remaining / 10 ).toFixed();
        output = output + table[ 10 * tens ];
        return calculateIndex( _remaining % 10, output );
    }
    return _remaining > 0 ? output + table[ _remaining ] : output;
}

function getNumericalValue ( str ) {
    var arr = str.split( '' );
    var val = 0;
    for ( var char = 0; char < arr.length; char++ ) {
        val += +values[ arr[ char ] ];
    }
    return val
}


function getArabicIndex ( number ) {

    const index = calculateIndex( number )
    return index
}

module.exports = {
    getArabicIndex: getArabicIndex,
    getNumericalValue: getNumericalValue
}
