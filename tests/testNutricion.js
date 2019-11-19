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
            .pause(1000)
            .click('#testNutricion')
            .assert.containsText('#__nuxt', 'Cuestionario')
            .setValue('input[id=edad]', '22')
            .setValue('input[id=altura]', '171')
            .setValue('input[id=peso]', '65')
            .setValue('#actividad_fisica', 'Hiperacti')
            .keys(browser.Keys.ENTER)
            .setValue('#hombre', 'true')
            .pause(1000)
            .setValue('input[id=imc]', '13')
            .setValue('input[id=grasa]', '11')
            .setValue('#experiencia', 'Más de un añ')
            .keys(browser.Keys.ENTER).pause(1000)
            .click('button[id=btnEnviar]')
            .pause(26000)
            .end()


    }
};



//.click('button[id=btnEnviar]')
//    .pause(5000)
//    .assert.containsText('#__nuxt', 'Hipocalorica')