# -. .-. LANDING .-. .-.
# 
class Landing
    constructor: ->
        @form = $('form')
        @fieldEmail = $('#signin-email')
        @fieldName = $('#signin-name')
        @sendButton = $('#send-button')
        @stage = 0

        this.addEventListener()

    addEventListener: ->
        @sendButton.on 'click', (event) =>
            event.preventDefault()
            this.sendAndNext()

        @fieldEmail.on 'focus', (event) =>
            this.changeStage(0) if @stage isnt 0

        @fieldName.on 'focus', (event) =>
            this.sendAndNext() if @stage is 0

    sendAndNext: ->
        return false if not this.validateEmail()

        simpleCORSRequest 
            url: 'http://catapult.gri.fo/orceria.com.br.php'
            method: 'post'
            form: @form

        this.nextStage()

    applyMessage: ->
        $('#message').remove() # Woops! no *find* method :(
        message = Landing.MESSAGES[@stage]
        @form.prepend "<div id=\"message\">#{message}</div>" if message

    nextStage: ->
        return unless @stage < Landing.STAGES.length - 1
        this.changeStage @stage + 1

    changeStage: (value) ->
        @stage = value
        this.applyMessage()
        @form[0].className = Landing.STAGES[@stage]
        if @stage is 2
            $('body').scrollTop -200

    validateEmail: ->
        valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test @fieldEmail.val()

        @fieldEmail.toggleClass 'invalid', not valid
        if not valid
            @fieldEmail[0].focus()
            this.changeStage 0

        return valid


Landing.STAGES = ['first', 'second', 'final']
Landing.MESSAGES = [
    ''
    'Seu e-mail foi cadastrado com sucesso'
    'Obrigado por nos ajudar a conhecer você melhor.<br>Enviaremos em breve um e-mail com mais informações.'
]

new Landing

#  -. .-. EXTERNAL .-. .-.
#
$(document).on 'click', 'a[rel="external"]', (event) ->
    event.preventDefault()
    window.open this.href

#  -. .-. GOOGLE ANALYICS .-. .-.
#
simpleAsyncLoad
    http: 'http://www.google-analytics.com/ga.js'
    ssl: 'https://ssl.google-analytics.com/ga.js'

# -. .-. SHARE THIS .-. .-.

simpleAsyncLoad 'http://w.sharethis.com/button/buttons.js', ->

    $.create("""
        <div class="share wrapper">
            <span class="st_facebook_vcount share-item" displayText="Facebook"></span>
            <span st_via="" st_title="Orceria - Uma nova maneira de orçar e realizar seus projetos" class="st_twitter_vcount share-item" displayText="Tweet"></span>
        </div>
    """).appendTo 'header'

    stLight.options
        publisher: 'ur-5ea22d2-5f60-7b40-65dc-7ebbf9f8773b'
        popup: true
        shorten: false

    




