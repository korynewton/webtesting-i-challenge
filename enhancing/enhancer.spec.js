const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

const item = {
    name: "Bow",
    durability: 23,
    enhancement: 13
}

const item2 = {
    name: "Sword",
    durability: 100,
    enhancement: 20
}

const item3 = {
    name: "Shield",
    durability: 100,
    enhancement: 14
}
const item4 = {
    name: "knife",
    durability: 100,
    enhancement: 15
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


describe('fail', () => {
    it('should fail correctly', () => {
        expect(fail(item3).durability).toBe(95)
        expect(fail(item4).durability).toBe(90)
        expect(fail(item2).enhancement).toBe(19)
        expect(fail(12)).toBe(null)
        expect(fail('')).toBe(null)
        expect(fail([])).toBe(null)
        expect(fail(false)).toBe(null)
    })
})