formData = (form) ->
    return unless form?

    form = form[0] unless form.nodeName?
    data = for field in form.elements when field.checked or field.type?.match /^text(area)?$/
        encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)

    if data?
        data.join('&').replace(/%20/g, '+')


window.simpleCORSRequest = (options) ->
    xhr = new XMLHttpRequest

    if xhr.withCredentials?
        # "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open options.method, options.url, true
        xhr.setRequestHeader 'Content-type', 'application/x-www-form-urlencoded'

    else if XDomainRequest?
        xhr = new XDomainRequest
        xhr.open options.method, options.url
    else
        alert 'Ops!\n\nPor favor, atualize seu navegador'
        return

    data = formData options.form
    xhr.send data ? null