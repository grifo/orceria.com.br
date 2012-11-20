flour = require 'flour'


task 'dev', ->
    # disable the js minifier
    flour.minifiers.js = null
    flour.compilers.styl.compress = false


task 'build:scripts', ->
    bundle [
        'source/scripts/ender.js'
        'source/scripts/simple-cors-request.coffee'
        'source/scripts/main.coffee'
    ], 'public/scripts/main.js'


task 'build:styles', ->
    bundle [
        'source/styles/reset.css'
        'source/styles/main.styl'
        'source/styles/print.css'
    ], 'public/styles/main.css'

task 'build', ->
    # https://github.com/ender-js/Ender/wiki/Ender-package-list
    (require 'ender').build [
        'bonzo'     # DOM utility
        'domready'  # DOM ready
        'reqwest'   # ajax!
        'bean'      # event manager
    ], output: 'source/scripts/ender', -> 
        invoke 'build:scripts'

    invoke 'build:styles'


task 'watch', ->
    invoke 'build'

    watch 'source/scripts/', -> 
        invoke 'build:scripts'

    watch 'source/styles/', -> 
        invoke 'build:styles'