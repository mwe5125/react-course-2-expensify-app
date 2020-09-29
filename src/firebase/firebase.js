import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config)

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export { firebase, googleAuthProvider, database as default }




//   //child removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//   })

//   //child changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })



//   database.ref('expenses')
//   .on('value', ((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//         console.log(expenses)
//     })
//     }))
    
  
//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

//   database.ref('expenses').push({
//       description: 'coffee',
//       note: '',
//       amount: 3.50,
//       createdAt: 1000
//   })


//   database.ref().on('value', (snapshot) =>{
//       const val = snapshot.val()
//       console.log(`${val.name} lives in ${val.location.city}`)
//   })





//   database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })


//   database.ref().set({
//       name: 'Mike Egan',
//       age: 26,
//       isSingle: false,
//       location: {
//           city: 'Philadelphia',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((e) => {
//     console.log('This failed', e)
//   })

// database.ref('isSingle').set(null)

// database.ref().update({
//     name: 'Julia',
//     'location/city': 'Boston'
// })
