import firebase from "../firebase";

export const addService = (data) => {
    firebase.firestore()
    .collection('services')
    .add(data)
}

export const getServices = (aServiceFunction) => {
    firebase
    .firestore()
    .collection('services')
    .onSnapshot((snapshot) => {
        const service = snapshot.docs.map((doc) => ({
            id:doc.id,
            ...doc.data()
        }))
        aServiceFunction(service)
    })
}

export const getServiceById = (item, id) => {
    firebase
    .firestore()
    .collection('services')
    .doc(id)
    .get()
    .then((docRef) => {item(docRef.data())})
}

export const deleteService = (id) => {
    firebase
    .firestore()
    .collection('services')
    .doc(id)
    .delete()
} 

export const updateService = (id, data) => {
    firebase
    .firestore()
    .collection('services')
    .doc(id)
    .set(data)
}