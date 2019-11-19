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
    'step one: go rutina' : function (browser) {
        browser
            .click('#rutina')
            .assert.containsText('#__nuxt', 'Rutina')
            .end()
    }
};
