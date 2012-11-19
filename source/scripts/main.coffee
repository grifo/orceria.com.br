


class Landing
    constructor: ->
        @form = $ 'form'
        @fields = $ 'form input'
        @email = $ '#signin-email'

        this.addEventListener()


    addEventListener: ->
        $('#send-button').on 'click', (event) =>
            event.preventDefault()
            this.send()

    send: ->
        return if not this.validate()
        $.ajax
            url: 'request-fake.php'
            method: 'post'
            data: $('form input').serialize(type: 'map')
            success: (resp) ->
                alert resp.content


    validate: ->
        invalid = @email.val().match(/^\s*$/)
        @email.toggleClass 'invalid', invalid
        @email[0].focus() if invalid
        return not invalid


new Landing