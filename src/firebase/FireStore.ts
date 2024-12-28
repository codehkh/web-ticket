import firebaseApp from '@/firebase/FirebaseConfig'
import { getFirestore } from 'firebase/firestore'

const fireStore = getFirestore(firebaseApp)
export default fireStore
