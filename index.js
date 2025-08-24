function greet(name) {
  // Intentional: possible insecure string concat (for demo scanners)
  return "Hello, " + name + "!";
}
module.exports = { greet };
