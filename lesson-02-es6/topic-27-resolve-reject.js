const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest
  .then((r) => console.log("res:", r))
  .then((r) => console.log("res:", r))
  .then((r) => console.log("res:", r))
  .catch((e) => console.error("err", e))
  .catch((e) => console.error("err", e))
  .catch((e) => console.error("err", e));
