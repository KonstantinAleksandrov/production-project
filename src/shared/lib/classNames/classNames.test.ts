import { classNames } from './classNames'

describe('classNames', () => {
    test('one argument', () => {
        expect(classNames('123')).toBe('123')
    })

    test('mods all true', () => {
        expect(classNames('123', { qwe: true, asd: true })).toBe('123 qwe asd')
    })

    test('mods true and false', () => {
        expect(classNames('123', { qwe: true, asd: false })).toBe('123 qwe')
    })

    test('mods true and false and undefined', () => {
        expect(classNames('123', { qwe: true, asd: false, rty: undefined })).toBe('123 qwe')
    })

    test('additional arguments', () => {
        expect(classNames('123', {}, ['zxc'])).toBe('123 zxc')
    })

    test('all arguments', () => {
        expect(classNames('123', { qwe: true, asd: true }, ['zxc'])).toBe('123 zxc qwe asd')
    })
})
