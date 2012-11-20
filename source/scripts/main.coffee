class Landing
    constructor: ->
        @form = $ 'form'
        @fields = $ 'form input'
        @email = $ '#signin-email'
        @stage = 0

        this.addEventListener()

    addEventListener: ->
        $('#send-button').on 'click', (event) =>
            event.preventDefault()
            this.send()

    send: ->
        return if not this.validate()
        $.ajax
            url: 'http://catapult.gri.fo/orceria.com.br.php'
            type: 'html'
            method: 'post'
            crossOrigin: true
            withCredentials: true
            data: $('form input').serialize(type: 'map')
        this.nextStage()

    message: ->
        $('.message').remove()
        message = Landing.MESSAGES[@stage]
        @form.prepend "<div class=\"message\">#{message}</div>"
        $('body').scrollTop 0

    nextStage: ->
        return unless @stage < Landing.STAGES.length - 1
        this.message()
        @stage++ 
        @form[0].className = Landing.STAGES[@stage]


    validate: ->
        valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test @email.val()

        @email.toggleClass 'invalid', not valid
        @email[0].focus() unless valid
        return valid


Landing.STAGES = ['first', 'second', 'final']
Landing.MESSAGES = [
    'Seu e-mail foi cadastrado com sucesso'
    'Obrigado por nos ajudar a conhecer você melhor.<br>Enviaremos em breve um e-mail com mais informações.'
]


new Landing