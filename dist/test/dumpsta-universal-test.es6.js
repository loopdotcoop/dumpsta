//\\//\\ src/test/App-universal-test.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

//// Node.js: 7.2.0
//// Rhino:   [not tested yet]

//// Windows XP: Firefox 6, Chrome 15 (and probably lower), Opera 12.10
//// Windows 7:  IE 9, Safari 5.1
//// OS X 10.6:  Firefox 6, Chrome 16 (and probably lower), Opera 12, Safari 5.1
//// iOS:        iPad 3rd (iOS 6) Safari, iPad Air (iOS 7) Chrome
//// Android:    Xperia Tipo (Android 4), Pixel XL (Android 7.1)




if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {




test('The Dumpsta class', () => {
    is('undefined' != typeof Dumpsta              , 'The Dumpsta object exists')
    is('function' == typeof Dumpsta               , 'Dumpsta is a function')

    is('Dumpsta' == Dumpsta.NAME                  , 'NAME as expected')
    is('0.0.' == Dumpsta.VERSION.slice(0,4)       , 'VERSION as expected')
    is(0 < Dumpsta.HOMEPAGE.indexOf('://dumpsta') , 'HOMEPAGE as expected')
})




})




//\\//\\ src/test/Border-universal-test.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

//// Node.js: 7.2.0
//// Rhino:   [not tested yet]

//// Windows XP: Firefox 6, Chrome 15 (and probably lower), Opera 12.10
//// Windows 7:  IE 9, Safari 5.1
//// OS X 10.6:  Firefox 6, Chrome 16 (and probably lower), Opera 12, Safari 5.1
//// iOS:        iPad 3rd (iOS 6) Safari, iPad Air (iOS 7) Chrome
//// Android:    Xperia Tipo (Android 4), Pixel XL (Android 7.1)




if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {




test('The Border class', () => {
    is('function' == typeof Dumpsta.Border   , '`Dumpsta.Border` is a function')
})




})




//\\//\\ src/test/Box-universal-test.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

//// Node.js: 7.2.0
//// Rhino:   [not tested yet]

//// Windows XP: Firefox 6, Chrome 15 (and probably lower), Opera 12.10
//// Windows 7:  IE 9, Safari 5.1
//// OS X 10.6:  Firefox 6, Chrome 16 (and probably lower), Opera 12, Safari 5.1
//// iOS:        iPad 3rd (iOS 6) Safari, iPad Air (iOS 7) Chrome
//// Android:    Xperia Tipo (Android 4), Pixel XL (Android 7.1)




if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {




test('The Box class', () => {
    is('function' == typeof Dumpsta.Box         , '`Dumpsta.Box` is a function')
})




})




//\\//\\ src/test/Button-universal-test.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

//// Node.js: 7.2.0
//// Rhino:   [not tested yet]

//// Windows XP: Firefox 6, Chrome 15 (and probably lower), Opera 12.10
//// Windows 7:  IE 9, Safari 5.1
//// OS X 10.6:  Firefox 6, Chrome 16 (and probably lower), Opera 12, Safari 5.1
//// iOS:        iPad 3rd (iOS 6) Safari, iPad Air (iOS 7) Chrome
//// Android:    Xperia Tipo (Android 4), Pixel XL (Android 7.1)




if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {




test('The Button class', () => {
    is('function' == typeof Dumpsta.Button   , '`Dumpsta.Button` is a function')
})




})




//\\//\\ src/test/Label-universal-test.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

//// Node.js: 7.2.0
//// Rhino:   [not tested yet]

//// Windows XP: Firefox 6, Chrome 15 (and probably lower), Opera 12.10
//// Windows 7:  IE 9, Safari 5.1
//// OS X 10.6:  Firefox 6, Chrome 16 (and probably lower), Opera 12, Safari 5.1
//// iOS:        iPad 3rd (iOS 6) Safari, iPad Air (iOS 7) Chrome
//// Android:    Xperia Tipo (Android 4), Pixel XL (Android 7.1)




if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {




test('The Label class', () => {
    is('function' == typeof Dumpsta.Label     , '`Dumpsta.Label` is a function')
})




})




//\\//\\ built by Oopish Make 0.0.4
