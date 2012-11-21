window.simpleAsyncLoad = (url, callback) ->
    url = http: url, ssl: url if typeof url is 'string'
    tag = document.createElement('script')
    tag.async = true
    
    if callback?
        tag.onload = callback
        tag.onreadystatechange = ->
            callback?() if tag.readyState is 'loaded'

    tag.src = if 'https:' is document.location.protocol then url.ssl else url.http
    $('script').first().before tag

    