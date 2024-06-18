import firebase from "../firebase";

export const addWork = (data) => {
    firebase.firestore()
    .collection('works')
    .add(data)
}

export const getAllWorks = (onWorksChanged) => {
    firebase
    .firestore()
    .collection('works')
    .onSnapshot((snapshot) => {
        const newWork = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        onWorksChanged(newWork)
    })
}

