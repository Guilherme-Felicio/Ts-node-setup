import Person from "@/index";

it("shoud sum", () => {
  const person = new Person();
  expect(person.sayMayName()).toBe("Guilherme");
});
