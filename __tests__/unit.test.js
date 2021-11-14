// unit.test.js

//const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
const {isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor} = require('../code-to-unit-test/unit-test-me.js');
// testing isPhoneNumber
test('(123)456-7899 is a phone number', () => {
    expect(isPhoneNumber('(123)456-7899')).toBe(true);
});
test('123-456-7899 is a phone number', () => {
    expect(isPhoneNumber('123-456-7899')).toBe(true);
});
test('littleBearsAreCute is not a phone number', () => {
    expect(isPhoneNumber('littleBearsAreCute')).toBe(false);
});
test('\' \' is not a phone number', () => {
    expect(isPhoneNumber(' ')).toBe(false);
});

// testing isEmail
test('littleBear@gmail.com is an email', () => {
    expect(isEmail('littleBear@gmail.com')).toBe(true);
});
test('123@email.com is an email', () => {
    expect(isEmail('123@email.com')).toBe(true);
});
test('littleBearsAreCute is not an email', () => {
    expect(isEmail('littleBearsAreCute')).toBe(false);
});
test('\' \' is not an email', () => {
    expect(isEmail(' ')).toBe(false);
});


// testing isStrongPassword
test('apples is a strong password', () => {
    expect(isStrongPassword('apples')).toBe(true);
});
test('appl3s4r3fr0mtr is a strong password', () => {
    expect(isStrongPassword('appl3s4r3fr0mtr')).toBe(true);
});
test('littleBearsAreCute is not a strong password', () => {
    expect(isStrongPassword('littleBearsAreCute')).toBe(false);
});
test('1 is not a strong password', () => {
    expect(isStrongPassword('1')).toBe(false);
});


// testing isDate
test('5/15/1998 is a date', () => {
    expect(isDate('5/15/1998')).toBe(true);
});
test('6/26/2000 is a date', () => {
    expect(isDate('6/26/2000')).toBe(true);
});
test('222/12/2222 is not a date', () => {
    expect(isDate('222/12/2222')).toBe(false);
});
test('1/15 is not a date', () => {
    expect(isDate('1/15')).toBe(false);
});


// testing isHexColor
test('#FFF is a hex color', () => {
    expect(isHexColor('#FFF')).toBe(true);
});
test('#FFFFFF is a hex color', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
});
test('FF is not a hex color', () => {
    expect(isHexColor('FF')).toBe(false);
});
test('#123456778 is not a hex color', () => {
    expect(isHexColor('#123456778')).toBe(false);
});
