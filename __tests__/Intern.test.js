const Intern = require("../lib/Intern");
const intern = new Intern("Andrea", "123456", "adj0803@gmail.com", "bootcamp");

test('test to see if the constructor values return objects', () => {
    expect(intern.name).toBe("Andrea");
    expect(intern.id).toBe("123456");
    expect(intern.email).toBe("adj0803@gmail.com");
    expect(intern.school).toBe("bootcamp");
});

test("test if we can get the name from the getName() method", () => {
    expect(intern.getName()).toBe("Andrea");
});

test("test if we can get the id from the getId() method", () => {
    expect(intern.getId()).toBe("123456");
});

test("test if we can get the email from the getEmail() method", () => {
    expect(intern.getEmail()).toBe("adj0803@gmail.com");
});

test ("test if we can get the school from the getSchool() method", () => {
    expect(intern.getSchool()).toBe("bootcamp");
});

