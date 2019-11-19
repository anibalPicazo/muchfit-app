module.exports = {
    'step one: login' : function (browser) {
        browser
            .url('http://localhost:3000/login')
            .waitForElementVisible('body')
            .setValue('input[id=username]', 'admin')
            .setValue('input[id=password]', 'admin')
            .click('button[id=btn]')
            .pause(1000)
            .click('button[id=btnmenu]')



    },
    'step one: go dieta' : function (browser) {
        browser
            .click('#dieta')
            .assert.containsText('#__nuxt', 'Dia')
            .end()
    }
};
