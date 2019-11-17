module.exports = {
    'Test Login' : function (browser) {
        browser
            .url('http://localhost:3000/login')
            .waitForElementVisible('body')
            .setValue('input[id=username]', 'admin')
            .setValue('input[id=password]', 'admin')
            .click('button[id=btn]')
            .assert.containsText('#__nuxt', 'Comidas recomendadas')
            .end();
    }
};
