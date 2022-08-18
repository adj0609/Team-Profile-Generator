const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Andrea", "123456", "adj0803@gmail.com", "adj0609/github");

test('test to see if the constructor values return objects', () => {
    expect(engineer.name).toBe("Andrea");
    expect(engineer.id).toBe("123456");
    expect(engineer.email).toBe("adj0803@gmail.com");
    expect(engineer.UserName).toBe("adj0609/github");
});

test("test if we can get the name from the getName() method", () => {
    expect(engineer.getName()).toBe("Andrea");
});

test("test if we can get the id from the getId() method", () => {
    expect(engineer.getId()).toBe("123456");
});

test("test if we can get the email from the getEmail() method", () => {
    expect(engineer.getEmail()).toBe("adj0803@gmail.com");
});

test ("test if we can get the user name from the getuserName() method", () => {
    expect(engineer.getuserName()).toBe("adj0609/github");
});

