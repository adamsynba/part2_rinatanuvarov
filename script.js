// Assignment #5 — Part 2: Introduction to JavaScript
// Student: Rinat Anuvarov | Group: MT-2505

function showOutput(taskNumber, lines) {
  const output = lines.join("\n");
  document.getElementById(`out${taskNumber}`).textContent = output;
  console.log(`Task ${taskNumber}\n${output}`);
}

// Task 6: Variables and data types
function runTask6() {
  const fullName = "Rinat Anuvarov";
  let age = 19;
  const isStudent = true;
  let favouriteColour = "Green";
  const lines = [
    `fullName: ${fullName} | typeof: ${typeof fullName}`,
    `age: ${age} | typeof: ${typeof age}`,
    `isStudent: ${isStudent} | typeof: ${typeof isStudent}`,
    `favouriteColour: ${favouriteColour} | typeof: ${typeof favouriteColour}`
  ];
  age = age + 1;
  lines.push(`Reassigned age: ${age} | typeof: ${typeof age}`);
  lines.push("const is used for values that should not be reassigned.");
  showOutput(6, lines);
}

// Task 7: Input and a greeting
function runTask7() {
  const enteredName = prompt("What is your name?");
  if (enteredName === null) {
    showOutput(7, ["Prompt cancelled by the user."]);
    return;
  }
  const greeting = `Hello, ${enteredName.trim() || "friend"}! Welcome to Healthy.`;
  alert(greeting);
  const combinedGreeting = "Rinat Anuvarov" + " from group " + "MT-2505";
  console.log(combinedGreeting);
  showOutput(7, [greeting, `Combined name and group: ${combinedGreeting}`]);
}

// Task 8: Sum and arithmetic
function runTask8() {
  const firstInput = prompt("Enter the first number (try 12):");
  if (firstInput === null) { showOutput(8, ["Input cancelled."]); return; }
  const secondInput = prompt("Enter the second number (try 5; must not be zero):");
  if (secondInput === null) { showOutput(8, ["Input cancelled."]); return; }
  const a = Number(firstInput);
  const b = Number(secondInput);
  if (firstInput.trim() === "" || secondInput.trim() === "" || !Number.isFinite(a) || !Number.isFinite(b) || b === 0) {
    showOutput(8, ["Please enter two valid numbers. The second number must not be zero."]);
    alert("Please enter valid numbers. The second number must not be zero.");
    return;
  }
  const lines = [
    `Sum: ${a} + ${b} = ${a + b}`,
    `Difference: ${a} - ${b} = ${a - b}`,
    `Product: ${a} * ${b} = ${a * b}`,
    `Quotient: ${a} / ${b} = ${a / b}`,
    `Remainder: ${a} % ${b} = ${a % b}`,
    `String addition: "${firstInput}" + "${secondInput}" = "${firstInput + secondInput}"`,
    `Number addition: ${a} + ${b} = ${a + b}`
  ];
  showOutput(8, lines);
}

// Task 9: Strings
function runTask9() {
  const fullName = "Rinat Anuvarov";
  const firstSentence = "I am learning JavaScript";
  const secondSentence = "for my frontend assignment.";
  showOutput(9, [
    `Full name: ${fullName}`,
    `Length: ${fullName.length}`,
    `Uppercase: ${fullName.toUpperCase()}`,
    `Lowercase: ${fullName.toLowerCase()}`,
    `First three characters: ${fullName.slice(0, 3)}`,
    `Combined sentence: ${firstSentence + " " + secondSentence}`
  ]);
}

// Task 10: Increment and assignment operators
function runTask10() {
  let counter = 10;
  const lines = [`Start: ${counter}`];
  counter++; lines.push(`After ++: ${counter}`);
  counter--; lines.push(`After --: ${counter}`);
  counter += 5; lines.push(`After += 5: ${counter}`);
  counter -= 3; lines.push(`After -= 3: ${counter}`);
  counter *= 2; lines.push(`After *= 2: ${counter}`);
  counter /= 4; lines.push(`After /= 4: ${counter}`);
  showOutput(10, lines);
}

// Task 11: Calculation from the lecture
function runTask11() {
  function calculateHumanAge(dogAge) {
    return (dogAge - 2) * 4 + 21;
  }
  const age2 = calculateHumanAge(2);
  const age5 = calculateHumanAge(5);
  showOutput(11, [
    `When dogAge = 2, humanAge = (2 - 2) * 4 + 21 = ${age2}`,
    `When dogAge = 5, humanAge = (5 - 2) * 4 + 21 = ${age5}`
  ]);
}

// Task 12: Functions, parameters, arguments, and return values
function greetUser(name) {
  return `Hello, ${name}! Welcome to Healthy.`;
}
function calculateSum(a, b) {
  return a + b;
}
function calculateRectangleArea(width, height) {
  return width * height;
}
function runTask12() {
  showOutput(12, [
    `greetUser("Arsen"): ${greetUser("Arsen")}`,
    `greetUser("Farabi"): ${greetUser("Farabi")}`,
    `calculateSum(3, 4): ${calculateSum(3, 4)}`,
    `calculateSum(12, 5): ${calculateSum(12, 5)}`,
    `calculateRectangleArea(5, 3): ${calculateRectangleArea(5, 3)}`,
    `calculateRectangleArea(8, 2): ${calculateRectangleArea(8, 2)}`,
    "Parameters are names in the function definition; arguments are the values passed in a call; return sends a result back to the caller."
  ]);
}

function clearOutputs() {
  [6, 7, 8, 9, 10, 11, 12].forEach(number => {
    document.getElementById(`out${number}`).textContent = "Results cleared. Click the task button to run it again.";
  });
  document.getElementById("outHelp").textContent = "Output areas cleared.";
  console.clear();
}
function runAllNonPromptTasks() {
  runTask6(); runTask9(); runTask10(); runTask11(); runTask12();
  document.getElementById("outHelp").textContent = "Tasks 6, 9, 10, 11 and 12 completed. Run Tasks 7 and 8 separately because they use prompts.";
}
