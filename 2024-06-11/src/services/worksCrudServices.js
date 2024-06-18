import firebase from "../firebase";

export const addWork = (data) => {
  firebase.firestore().collection("works").add(data);
};

export const getAllWorks = (onWorksChanged) => {
  firebase
    .firestore()
    .collection("works")
    .onSnapshot((snapshot) => {
      const newWork = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      onWorksChanged(newWork);
    });
};

export const deleteWorks = (id) => {
  firebase.firestore().collection("works").doc(id).delete();
};

export const getWorkById = (id, item) => {
  firebase
    .firestore()
    .collection("works")
    .doc(id)
    .get()
    .then((docRef) => {
      item(docRef.data());
    });
};

export const updateWork = (id, data) => {
    firebase
    .firestore()
    .collection('works')
    .doc(id)
    .set(data)
}
