const { test, expect} = require('@playwright/test');

test.beforeEach(async({ page}) => {
    await page.goto('http://127.0.0.1:5500/index.html');
});

test.describe('Testing Form', () => {

    test('deberia mostrar mensaje correcto',async ()=>{
        await page.getbylabel('Nombre', { exact:true }).fill('laura');
        await page.getbylabel('telefono', { exact:true }).fill('66666666');
        await page.getbylabel('email', { exact:true }).fill('pepe@pepe.com');
    
        
    
    }); 

});
