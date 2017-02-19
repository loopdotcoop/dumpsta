!function () { 'use strict'

const NAME     = 'Oopish Make'
    , VERSION  = '0.0.3'
    , HOMEPAGE = 'http://make.oopish.com/'

    , BYLINE   = `\n\n\n\n//\\\\//\\\\ built by ${NAME} ${VERSION}\n`
    , HELP =
`
${NAME} ${VERSION}
${'='.repeat( (NAME+VERSION).length+1 )}

This Node.js script reads source files from ‘src/’ (all ES6), and rebuilds the
distribution files in ‘dist/’ (ES6, ES5 and minified ES5).

Installation
------------
You’ll need Uglify and Traceur installed globally before running make.js:
$ npm install -g uglify-js; npm install -g traceur

If you haven’t done it already, you should set up the \`oomake\` alias:
$ node utility/alias.js

Basic Usage
-----------
$ cd /path/to/your/project/   # A project directory in standard Oopish format
$ oomake --version            # Show the current ${NAME} version
$ oomake                      # Build all distribution files in ‘dist/’

Make Tasks
----------
1. Concatenate files in ‘src/main/’ to ‘dist/main/project.es6.js’
2. Transpile the new ‘project.es6.js’ to ‘project.es5.js’
3. Minify ‘project.es5.js’ to ‘project.es5.min.js’
4. Copy files in ‘src/example/’ to ‘dist/example/’
5. Transpile ES6 files in dist/example/’ to ES5
6. Concatenate files in ‘src/test/’ to:
   - ‘dist/test/project-browser-test.es6.js’    (can only be run in a browser)
   - ‘dist/test/project-nonbrowser-test.es6.js’ (cannot be run in a browser)
   - ‘dist/test/project-universal-test.es6.js’  (can run anywhere)
7. Transpile the ‘browser’ and ‘universal’ files to ES5

Options
-------
-h  --help      Show this help message
-v  --version   Show the current ${NAME} version

This script belongs to ${HOMEPAGE}`


//// Validate the environment.
if ( '/utility/make.js' !== process.argv[1].slice(-16) )
    return console.warn('Unexpected environment!')
if ( ( process.cwd() !== process.argv[1].slice(0,-16) ) )
    return console.warn('Unexpected CWD, try:\n  $ cd /path/to/your/project/')
if ('function' !== typeof require)
    return console.warn('Use Node.js instead:\n  $ node utility/make.js')




//// SETUP


//// Load library functionality.
const fs = require('fs')
    , uglify = tidyUglifyWarnings( require('uglify-js') )
    , traceur = require('traceur/src/node/api.js')

//// Set constants.
const project = process.cwd().split('/').pop()


//// Declare variables.
let opt, es6, es5, min, src, names

//// Deal with command-line options.
while ( opt = process.argv.shift() ) {
    if ('-h' === opt || '--help'    === opt) return console.log(HELP)
    if ('-v' === opt || '--version' === opt) return console.log(VERSION)
}




//// MAIN


//// 1. Concatenate files in ‘src/main/’ to ‘dist/main/project.es6.js’
src = fs.readdirSync('src/main')
es6 = []
src.forEach( name => {
    if ( '.es6.js' !== name.slice(-7) ) return
    es6.push('//\\\\//\\\\ src/main/' + name)
    es6.push( fs.readFileSync('src/main/' + name)+'' )
})
es6 = es6.join('\n\n\n\n') + BYLINE
fs.writeFileSync( `dist/main/${project}.es6.js`, es6 )


//// 2. Transpile the new ‘project.es6.js’ to ‘project.es5.js’
es5 = traceur.compile(es6, { blockBinding:true }) + BYLINE
es5 = es5.replace( // correct a traceur error
    /efined' : \$traceurRuntime\.typeof\(global\)\) \? global : \(void 0\)\);/g
  , "efined' : $traceurRuntime.typeof(global)) ? global : this);"
)
fs.writeFileSync( `dist/main/${project}.es5.js`, es5 )


//// 3. Minify ‘project.es5.js’ to ‘project.es5.min.js’
min = uglify.minify( es5, minConfig(`dist/main/${project}.es5.min.js`) )
fs.writeFileSync( `dist/main/${project}.es5.min.js`, min.code + BYLINE )




//// EXAMPLE


//// 4. Copy files in ‘src/example/’ to ‘dist/example/’
src = fs.readdirSync('src/example')
es6 = [], names = []
src.forEach( name => {
    if ( '.es6.js' !== name.slice(-7) ) return
    es6.push('//\\\\//\\\\ src/example/' + name + '\n\n\n\n'
        + fs.readFileSync('src/example/' + name)
    )
    names.push( name.slice(0, -7) )
})
es6.forEach( (orig, i) =>
    fs.writeFileSync( `dist/example/${names[i]}.es6.js`, orig + BYLINE )
)


//// 5. Transpile ES6 files in dist/example/’ to ES5
es6.forEach( (orig, i) => {
    const es5 = traceur.compile(orig, { blockBinding:true })
    fs.writeFileSync( `dist/example/${names[i]}.es5.js`, es5 + BYLINE )
})




//// TEST


//// 6. Concatenate files in ‘src/test/’ to:
src = fs.readdirSync('src/test')
es6 = { browser:[], nonbrowser:[], universal:[] }
src.forEach( name => {
    if ( '.es6.js' !== name.slice(-7) ) return
    let ua =
        0 < name.indexOf('browser')    ? es6.browser
      : 0 < name.indexOf('nonbrowser') ? es6.nonbrowser
      : 0 < name.indexOf('universal')  ? es6.universal
      : []
    ua.push('//\\\\//\\\\ src/test/' + name)
    ua.push( fs.readFileSync('src/test/' + name)+'' )
})

//// - ‘dist/test/project-browser-test.es6.js’    (can only be run in a browser)
es6.browser    = es6.browser.join('\n\n\n\n')    + BYLINE
fs.writeFileSync( `dist/test/${project}-browser-test.es6.js`,  es6.browser )

//// - ‘dist/test/project-nonbrowser-test.es6.js’ (cannot be run in a browser)
es6.nonbrowser = es6.nonbrowser.join('\n\n\n\n') + BYLINE
fs.writeFileSync( `dist/test/${project}-nonbrowser-test.es6.js`,es6.nonbrowser )

//// - ‘dist/test/project-universal-test.es6.js’  (can run anywhere)
es6.universal  = es6.universal.join('\n\n\n\n')  + BYLINE
fs.writeFileSync( `dist/test/${project}-universal-test.es6.js`, es6.universal )


//// 7. Transpile the ‘browser’ and ‘universal’ files to ES5
es5 = {}
es5.browser    = traceur.compile(es6.browser,   { blockBinding:true }) + BYLINE
fs.writeFileSync( `dist/test/${project}-browser-test.es5.js`,    es5.browser )
es5.universal  = traceur.compile(es6.universal, { blockBinding:true }) + BYLINE
fs.writeFileSync( `dist/test/${project}-universal-test.es5.js`,  es5.universal )




//// UTILITY


//// Hack Uglify, to avoid warnings we don’t care about.
function tidyUglifyWarnings (uglify) {
    var origWarn = uglify.AST_Node.warn
    uglify.AST_Node.warn = function(txt, props) {
        if (! (
            'Dropping unused variable {name} [{file}:{line},{col}]' === txt
            && ( // 'WARN: Dropping unused variable HOMEPAGE [...]', etc
                'NAME'     === props.name
             || 'VERSION'  === props.name
             || 'HOMEPAGE' === props.name
            )
        ) ) origWarn(txt, props)
    }
    return uglify
}


//// Generate a configuration object for Uglify.
function minConfig(outFileName) {
    return {
        fromString:  true
      , outFileName: outFileName
      , warnings:    true
      , output: { max_line_len:64 } // easier on the eye - but 500 would be safe
      , compress: {
            dead_code:   true
          , global_defs: { DEBUG:false }
        }
    }
}

}()
