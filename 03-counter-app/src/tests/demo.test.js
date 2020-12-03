describe('Pruebas en el archivo demo.test.js', () => {
    test('string must be equal', () => {
        // Inicializacion
        const mensaje = 'Hola mundo';
        // Estimulo
        const mensaje2 = `Hola mundo`;
        // Observar comportamiento
        expect(mensaje).toBe(mensaje2);
    })
});
