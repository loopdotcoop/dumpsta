!function () { 'use strict'

const NAME     = 'Oopish Alias'
    , VERSION  = '0.0.2'
    , HOMEPAGE = 'http://alias.oopish.com/'

    , HELP =
`
${NAME} ${VERSION}
${'='.repeat( (NAME+VERSION).length+1 )}

This Node.js script adds handy aliases to your ~/.bash_profile or ~/.bashrc,
which will help speed up your development workflow.

Basic Usage
-----------
$ cd /path/to/your/project/
$ node utility/alias.js
${NAME} ${VERSION} added 6 lines to ~/.bash_profile.
After reopening your terminal, the following commands will be available:
    ooauto   Generates new classes, demos, docs and tests
    oobump   Bumps the current minor-version
    oodocs   Generates API documentation
    ooinit   Initialises a new project
    oomake   Builds the project, from src/ into dist/
    oopush   Prompts for a commit-message, then pushes
    ootest   Runs unit tests

Aliases
-------
$ ooauto   node utility/auto.js
$ oobump   node utility/bump.js
$ oodocs   node utility/docs.js
$ ooinit   node utility/init.js
$ oomake   node utility/make.js
$ oopush   node utility/push.js
$ ootest   node utility/test.js

Options
-------
-h  --help      Show this help message
-v  --version   Show the current ${NAME} version
-r  --remove    Removes the aliases from ~/.bash_profile or ~/.bashrc

This script belongs to ${HOMEPAGE}`


//// Validate the environment.
if ( '/utility/alias.js' !== process.argv[1].slice(-17) )
    return console.warn('Unexpected environment!')
if ( ( process.cwd() !== process.argv[1].slice(0,-17) ) )
    return console.warn('Unexpected CWD, try:\n  $ cd /path/to/your/project')
if ('function' !== typeof require)
    return console.warn('Use Node.js instead:\n  $ node utility/alias.js')




//// SETUP


//// Load library functionality.
const fs = require('fs')

//// Set constants.
const homedir = require('os').homedir()

//// Declare variables.
let opt, path, original, removed, diff, remove = false

//// Deal with command-line options.
while ( opt = process.argv.shift() ) {
    if ('-h' === opt || '--help'    === opt) return console.log(HELP)
    if ('-v' === opt || '--version' === opt) return console.log(VERSION)
    if ('-r' === opt || '--remove'  === opt) remove = true
}




//// Get the absolute path to the ~/.bash_profile or ~/.bashrc file.
if ( fs.existsSync(homedir+'/.bash_profile') )
    path = homedir+'/.bash_profile'
else if ( fs.existsSync(homedir+'/.bashrc') )
    path = homedir+'/.bashrc'
else
    return console.warn(
`${NAME} ${VERSION} cannot find the ~/.bash_profile file or the ~/.bashrc file.
On OS X you should create an empty .bash_profile file in your home directory.
On Linux you should create an empty .bashrc file in your home directory.
Windows cannot run ${NAME} ${VERSION}`)


//// Check whether the aliases have already been added.
original = ( fs.readFileSync(path)+'' ).split('\n')
removed = original.filter( line =>
    ! /^alias oo(auto|bump|docs|init|make|push|test)="node utility\//.test(line)
)
diff = original.length - removed.length
if (diff)
    if (remove) {
        while (removed.length && '' === removed[removed.length-1]) removed.pop() // trim trailing newlines
        try {
            fs.writeFileSync( path, removed.join('\n') + '\n' )
        } catch (e) {
            if ( 'EACCES' === e.code && 0 < e.message.indexOf('permission denied') )
                return console.warn(
`${NAME} ${VERSION} cannot write to ${path}
You should change temporarily change the permissions, eg:
    OLD_PERMISSIONS=\`stat -f '%A' "${path}"\`;\\
    chmod 644 "${path}";\\
    node utility/alias.js --remove;\\
    chmod $OLD_PERMISSIONS "${path}"`)
            else
                return console.warn(`${NAME} ${VERSION} cannot write to ${path}:\n`, e)
        }
        return console.log(
`${NAME} ${VERSION} removed ${diff} line${1==diff?'':'s'} from ${path}`)}
    else
        return console.warn(
`${NAME} ${VERSION} did not run, because there are already lines added by
${NAME} in ${path}.
To remove these lines, run:
    node utility/alias.js --remove`)

if (remove)
    return console.warn(
`${NAME} ${VERSION}: nothing to --remove from ${path}`)


//// Write the aliases to the ~/.bash_profile or ~/.bashrc file.
try {
    const comment = getComment()
    fs.writeFileSync( path, ( original.concat([
        `alias ooauto="node utility/auto.js" ${comment}`
      , `alias oobump="node utility/bump.js" ${comment}`
      , `alias oodocs="node utility/docs.js" ${comment}`
      , `alias ooinit="node utility/init.js" ${comment}`
      , `alias oomake="node utility/make.js" ${comment}`
      , `alias oopush="node utility/push.js" ${comment}`
      , `alias ootest="node utility/test.js" ${comment}`
      , ''
    ]) ).join('\n') )
} catch (e) {

    //// User has run something like `$ chmod 444 /Users/fred/.bash_profile`.
    if ( 'EACCES' === e.code && 0 < e.message.indexOf('permission denied') )
        return console.warn(
`${NAME} ${VERSION} cannot write to ${path}
You should change temporarily change the permissions, eg:
    OLD_PERMISSIONS=\`stat -f '%A' "${path}"\`;\\
    chmod 644 "${path}";\\
    node utility/alias.js;\\
    chmod $OLD_PERMISSIONS "${path}"`)

    //// Some other file error.
    else return console.warn(`${NAME} ${VERSION} cannot write to ${path}:\n`, e)
}
return console.log(
`${NAME} ${VERSION} added 6 lines to ${path}.
After reopening your terminal, the following commands will be available:
    ooauto   Generates new classes, demos, docs and tests
    oobump   Bumps the current minor-version
    oodocs   Generates API documentation
    ooinit   Initialises a new project
    oomake   Builds the project, from src/ into dist/
    oopush   Prompts for a commit-message, then pushes
    ootest   Runs unit tests
`)




//// UTILITY

////
function getComment () {
    const now = new Date()
    return [
       '# '
      , now.getUTCFullYear()
      , 10 > now.getUTCMonth()+1 ? '0' : ''
      , now.getUTCMonth()+1
      , now.getUTCDate()
      , '-'
      , 10 > now.getUTCHours() ? '0' : ''
      , now.getUTCHours()
      , 10 > now.getUTCMinutes() ? '0' : ''
      , now.getUTCMinutes()
      , ' added by '
      , NAME
      , ' '
      , VERSION
  ].join('')
}


}()
