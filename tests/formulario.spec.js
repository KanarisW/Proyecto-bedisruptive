const { test, expect} = require('@playwright/test');

test.beforeEach(async({ page}) => {
    await page.goto('file:///C:/Users/Kanaris/Desktop/Curso%20web/PROYECTOSWEB/Proyecto%20bedisruptive/index.html');
});

test.describe('Testing Form', () => {

    test('deberia mostrar mensaje correcto',async ()=>{
        await page.getbylabel('Nombre', { exact:true }).fill('laura');
        await page.getbylabel('telefono', { exact:true }).fill('66666666');
        await page.getbylabel('email', { exact:true }).fill('pepe@pepe.com');
    
        
    
    }); 

});
