import Magician from '../js/magician';

test('Magician attacks regular', () => {
        const unit = new Magician('Redd', 'Magician');
        unit.attack = 100;
        expect(unit.attack).toBe(100);
});

test('Magician attacks regular-2', () => {
        const unit = new Magician('Redd', 'Magician');
        unit.attack = 100;
        unit.distance = 2;
        expect(unit.attack).toBe(90);
});

test('Magician attacks regular-3', () => {
        const unit = new Magician('Redd', 'Magician');
        unit.attack = 100;
        unit.distance = 3;
        expect(unit.attack).toBe(80);
});

test('Magician attacks regular-5', () => {
        const unit = new Magician('Redd', 'Magician');
        unit.attack = 100;
        unit.distance = 5;
        expect(unit.attack).toBe(60);
});

test('Magician attacks regular-2 and stoned', () => {
        const unit = new Magician('Redd', 'Magician');
        unit.attack = 100;
        unit.distance = 2
        unit.stoned = true;
        expect(unit.attack).toBe(85);
});

test('Test status - stoned', () => {
        const unit = new Magician('Redd', 'Magician');
        unit.stoned = true;
        expect(unit.stoned).toBe(true);
})