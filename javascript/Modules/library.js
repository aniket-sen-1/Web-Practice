let message = "hello world";
function user(name) {
  return `Hello ${name}`;
}
class test {
  constructor() {
    console.log("constructor called");
  }
}
// export default let fixname = "hello i am default with named";
export default function hii() {
  console.log("hi");
}

export { message, user, test };
