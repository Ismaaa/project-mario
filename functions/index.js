const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("It works !");
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log("Notification added", doc);
    })
    .catch((error) => {
      console.error(error);
    });
};

exports.projectCreated = functions.firestore.document("projects/{projectId}").onCreate((doc) => {
  const project = doc.data();
  const notification = {
    content: "Added a new project",
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp(), // server timestamp
  };

  return createNotification(notification);
});
