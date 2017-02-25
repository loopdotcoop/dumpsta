//\\//\\ src/test/App-universal-test.6.js



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




//\\//\\ src/test/El-universal-test.6.js



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




test('The El class', () => {
    is('function' == typeof Dumpsta.El           , '`Dumpsta.El` is a function')
})




})




//\\//\\ src/test/El.Border-universal-test.6.js



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




test('The El.Border class', () => {
    is('function' == typeof Dumpsta.El.Border
      , '`Dumpsta.El.Border` is a function')
})




})




//\\//\\ src/test/El.Box-universal-test.6.js



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




test('The El.Box class', () => {
    is('function' == typeof Dumpsta.El.Box
      , '`Dumpsta.El.Box` is a function')
})




})




//\\//\\ src/test/El.Button-universal-test.6.js



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




test('The El.Button class', () => {
    is('function' == typeof Dumpsta.El.Button
       , '`Dumpsta.El.Button` is a function')
})




})




//\\//\\ src/test/El.Label-universal-test.6.js



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




test('The El.Label class', () => {
    is('function' == typeof Dumpsta.El.Label
      , '`Dumpsta.El.Label` is a function')
})




})




//\\//\\ src/test/El.Table-universal-test.6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////


//// Node.js: 7.2.0
//// Rhino:   [not tested yet]

//// Windows XP: Firefox 6, Chrome 15 (and probably lower), Opera 12.10
//// Windows 7:  IE 9, Safari 5.1
//// OS X 10.6:  Firefox 6, Chrome 16 (and probably lower), Opera 12, Safari 5.1
//// iOS:        iPad 3rd (iOS 6) Safari, iPad Air (iOS 7) Chrome
//// Android:    Xperia Tipo (Android 4), Pixel XL (Android 7.1)




if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) { 'use strict'




test('The El.Table class', () => {
    is('function' == typeof Dumpsta.El.Table
      , '`Dumpsta.El.Table` is a function')
})




})




//\\//\\ built by Oopish Make 0.0.8 //\\//\\ http://ootility.oopish.com //\\//\\
