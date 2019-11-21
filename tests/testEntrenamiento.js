module.exports = {
    'step one: login' : function (browser) {
        browser
            .url('http://localhost:3000/login')
            .waitForElementVisible('body')
            .setValue('input[id=username]', 'admin')
            .setValue('input[id=password]', 'admin')
            .click('button[id=btn]')


    },
    'step two: make test entrenamiento' : function (browser) {
        browser
            .pause(1000)
            .click('button[id=btnmenu]')
            .pause(1000)
            .click('#testEntrenamiento')
            .assert.containsText('#__nuxt', 'Cuestionario')
            .setValue('#selectExperiencia', 'De dos a ocho mese')
            .keys(browser.Keys.ENTER)
            .setValue('#selectFormaFisica', 'alo')
            .keys(browser.Keys.ENTER)
            .pause(4000)
            .click('button[id=submit]')
            .pause(6000)
            .assert.containsText('#__nuxt', 'aclimatacion')
            .end()


    }

};



