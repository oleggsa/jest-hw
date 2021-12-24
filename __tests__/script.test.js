import {ixOf, lastIxOf, incl, some, test10} from '../src/script.js'

let arr = [1, 3, 5, 7, 9, 12, 5, 15, 52, 711];
let arr2 = [];

test('ixOf', () => {
    expect(ixOf(arr, 5)).toEqual(2),
    expect(ixOf(arr, 15)).toEqual(7),
    expect(ixOf(arr, 2)).toEqual(-1),
    expect(ixOf(arr2, 6)).toEqual(-1)
})

test('lastIxOf', () => {
    expect(lastIxOf(arr, 5)).toEqual(6),
    expect(lastIxOf(arr, 52)).toEqual(8),
    expect(lastIxOf(arr, 154)).toEqual(-1),
    expect(lastIxOf(arr2, 6)).toEqual(-1)
})

test('incl', () => {
    expect(incl(arr, 5)).toBeTruthy(),
    expect(incl(arr, 52)).toBeTruthy(),
    expect(incl(arr, 142)).toBeFalsy(),
    expect(incl(arr2, 142)).toBeFalsy()
})

test('some', () => {
    expect(some(arr, test10)).toBeTruthy(),
    expect(some(arr2, test10)).toBeFalsy()
})