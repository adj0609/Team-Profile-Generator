const Employee = require("../lib/Employee");
const employee = new Employee("Andrea", "123456", "adj0803@gmail.com");

test('test to see if the constructor values return objects', () => {
    expect(employee.name).toBe("Andrea");
    expect(employee.id).toBe("123456");
    expect(employee.email).toBe("adj0803@gmail.com");
});

test("test if we can get the name from the getName() method", () => {
    expect(employee.getName()).toBe("Andrea");
});

test("test if we can get the id from the getId() method", () => {
    expect(employee.getId()).toBe("123456");
});

test("test if we can get the email from the getEmail() method", () => {
    expect(employee.getEmail()).toBe("adj0803@gmail.com");
});