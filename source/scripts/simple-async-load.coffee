window.simpleAsyncLoad = (http, ssl) ->

    ssl = ssl ? http
    tag = $(document.createElement('script'))

    tag.attr 'async', true
    tag.attr 'src', if 'https:' is document.location.protocol then ssl else http

    $('script').first().before tag