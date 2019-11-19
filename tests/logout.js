module.exports = {
    'Step one: Login' : function (browser) {
        browser
            .url('http://localhost:3000/login')
            .waitForElementVisible('body')
            .setValue('input[id=username]', 'admin')
            .setValue('input[id=password]', 'admin')
            .click('button[id=btn]')
            .pause(2000)
            .click('button[id=btnmenu]')

    },
    'Step two: Logout' : function (browser) {
        browser
            .pause(2000)
            .click('button[id=logout]')
            .pause(2000)
            .assert.containsText('#__nuxt', 'Usuario')
            .end();
    }

    };
