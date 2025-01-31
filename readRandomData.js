const fs = require("fs");
const path = require("path");

const INPUT_FILE = path.join(__dirname, "random_data.txt");

function detectType(value) {
  if (/^\d+$/.test(value)) {
    return "Integer";
  } else if (/^\d+\.\d+$/.test(value)) {
    return "Real Number";
  } else if (/^[a-zA-Z]+$/.test(value)) {
    return "Alphabetical String";
  } else {
    return "Alphanumeric";
  }
}

function readAndPrintData() {
  fs.readFile(INPUT_FILE, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const objects = data.split(",");
    objects.forEach((obj) => {
      const trimmedObj = obj.trim();
      const type = detectType(trimmedObj);
      console.log(`${trimmedObj} - ${type}`);
    });
  });
}

readAndPrintData();
