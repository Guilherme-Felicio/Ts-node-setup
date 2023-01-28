import Tree from "@/tree/index";

class Person {
  sayMayName() {
    return "Guilherme";
  }

  pathTest() {
    const tree = new Tree();
    tree.whoIAm();
  }
}

export default Person;
