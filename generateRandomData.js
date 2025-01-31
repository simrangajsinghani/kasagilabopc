const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = path.join(__dirname, "random_data.txt");
const FILE_SIZE = 10 * 1024 * 1024; // 10MB

function getRandomAlphabeticalString(length = 10) {
  return Array.from({ length }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join("");
}

function getRandomRealNumber() {
  return (Math.random() * 1000).toFixed(5);
}

function getRandomInteger() {
  return Math.floor(Math.random() * 10000);
}

function getRandomAlphanumeric() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = Math.floor(Math.random() * 10) + 5;
  const value = Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
  const spacesBefore = " ".repeat(Math.floor(Math.random() * 6));
  const spacesAfter = " ".repeat(
    Math.floor(Math.random() * (10 - spacesBefore.length))
  );
  return `${spacesBefore}${value}${spacesAfter}`;
}

function generateData() {
  let fileStream = fs.createWriteStream(OUTPUT_FILE, { flags: "w" });
  let fileSize = 0;

  while (fileSize < FILE_SIZE) {
    let data = `${getRandomAlphabeticalString()},${getRandomRealNumber()},${getRandomInteger()},${getRandomAlphanumeric()},`;
    fileStream.write(data);
    fileSize += Buffer.byteLength(data, "utf-8");
  }
  fileStream.end();
  console.log("File generated successfully!");
}

generateData();
