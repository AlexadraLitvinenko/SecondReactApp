 const { coding } = require('./utils/coding');

 test('test coding', () => {
     expect(coding("din")).toBe("(((");
 });

 test('test coding', () => {
    expect(coding("recede")).toBe("()()()");
});

test('test coding', () => {
    expect(coding("Success")).toBe(")())())");
});

test('test coding', () => {
    expect(coding("CodeWarrior")).toBe("()(((())())");
});

test('test coding', () => {
    expect(coding("Supralapsarian")).toBe(")()))()))))()(");
});

test('test coding', () => {
    expect(coding("iiiiii")).toBe("))))))");
});

test('test coding', () => {
    expect(coding("(( @")).toBe("))((");
});

test('test coding', () => {
    expect(coding("@J@c!@@@z@@)")).toBe(")()(()))())(");
});

test('test coding', () => {
    expect(coding("kzmdGmmuImcmmmn")).toBe("(()(())(()()))(");
});

test('test coding', () => {
    expect(coding("Od)OIOORQOmS")).toBe(")(()())(()((");
});

test('test coding', () => {
    expect(coding("QTnTTTPIv(TT")).toBe("()()))(((())");
});

test('test coding', () => {
    expect(coding("kyQe@!cyJmyyvFyyyyy")).toBe("()((((()(())(()))))");
});