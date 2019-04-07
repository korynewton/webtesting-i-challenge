const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

const item = {
    name: "Bow",
    durability: 23,
    enhancement: 13
}

const item2 = {
    name: "Bow",
    durability: 100,
    enhancement: 20
}

describe('repair', () => {
    it('should restore durability back to 100', () => {
        

        expect(repair(item).durability).toBe(100)
        expect(repair(item2).durability).toBe(100)
        expect(repair(12)).toBe(null)
        expect(repair('')).toBe(null)
        expect(repair([])).toBe(null)
        expect(repair(false)).toBe(null)
    })
});

describe('succeed', () => {
    it('should increase enhancement by 1', () => {
        expect(succeed(item).enhancement).toBe(14)
        expect(succeed(item2).enhancement).toBe(20)
        expect(succeed(12)).toBe(null)
        expect(succeed('')).toBe(null)
        expect(succeed([])).toBe(null)
        expect(succeed(false)).toBe(null)


    })
})