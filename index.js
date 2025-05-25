// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, `files`, "starter.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, `files`, "starter.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, `files`, "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, `files`, "promiseWrite.txt"),
      "\n\nNice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, `files`, "promiseWrite.txt"),
      path.join(__dirname, `files`, "promiseRename.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, `files`, "promiseRename.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(
//   path.join(__dirname, `files`, "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.writeFile(
//   path.join(__dirname, `files`, "reply.txt"),
//   "This is a reply to reply.txt file",
//   (err) => {
//     if (err) throw err;
//     console.log(" written successfully");

//     fs.appendFile(
//       path.join(__dirname, `files`, "reply.txt"),
//       "\nYes it is appended",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");

//         fs.rename(
//           path.join(__dirname, `files`, "reply.txt"),
//           path.join(__dirname, `files`, "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// );

//exit on uncaught errors

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err.message);
  process.exit(1); // Exit the process with a failure code
});
