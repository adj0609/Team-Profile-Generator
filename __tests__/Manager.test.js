const Manager = require("../lib/Manager");
const manager = new Manager("Andrea", "123456", "adj0803@gmail.com", "3304796128");

test('test to see if the constructor values return objects', () => {
    expect(manager.name).toBe("Andrea");
    expect(manager.id).toBe("123456");
    expect(manager.email).toBe("adj0803@gmail.com");
    expect(manager.officeNumber).toBe("3304796128");
});

test("test if we can get the name from the getName() method", () => {
    expect(manager.getName()).toBe("Andrea");
});

test("test if we can get the id from the getId() method", () => {
    expect(manager.getId()).toBe("123456");
});

test("test if we can get the email from the getEmail() method", () => {
    expect(manager.getEmail()).toBe("adj0803@gmail.com");
});

test ("test if we can get the office number from the getOfficeNumber() method", () => {
    expect(manager.getOfficeNumber()).toBe("3304796128");
});








