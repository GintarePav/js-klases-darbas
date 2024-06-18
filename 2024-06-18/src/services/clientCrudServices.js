import firebase from "../firebase";

export const addClient = (data) => {
    firebase.firestore()
    .collection('clients')
    .add(data)
}

export const getClients = (aClientFunction) => {
    firebase
    .firestore()
    .collection('clients')
    .onSnapshot((snapshot) => {
        const client = snapshot.docs.map((doc) => ({
            id:doc.id,
            ...doc.data()
        }))
        aClientFunction(client)
    })
}

export const getClientById = (item, id) => {
    firebase
    .firestore()
    .collection('clients')
    .doc(id)
    .get()
    .then((docRef) => {item(docRef.data())})
}

export const deleteClient = (id) => {
    firebase
    .firestore()
    .collection('clients')
    .doc(id)
    .delete()
} 

export const updateClient = (id, data) => {
    firebase
    .firestore()
    .collection('clients')
    .doc(id)
    .set(data)
}