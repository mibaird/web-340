//main function for the program; displays the node executable and file being executed

function main() {
  const nodeExecutable = process.argv[0];
  const fileBeingExecuted = process.argv[1];

  console.log("Node Executable: " + nodeExecutable);
  console.log("File Being Executed: " + fileBeingExecuted);
}

main(); // call the main function
