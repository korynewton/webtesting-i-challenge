const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('repair', () => {
    it('should restore durability back to 100', () => {
        const item = {
            name: "Bow",
            durability: 23,
            enhancement: 13
        }

        const item2 = {
            name: "Bow",
            durability: 100,
            enhancement: 13
        }

        expect(repair(item).durability).toBe(100)
        expect(repair(item2).durability).toBe(100)
        expect(repair(12)).toBe(null)
        expect(repair('')).toBe(null)
        expect(repair([])).toBe(null)
        expect(repair(false)).toBe(null)

    })
});