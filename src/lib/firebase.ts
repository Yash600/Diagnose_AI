// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9YwLVJiK87mhxCdp4gJ5nLagGOOtuMJk",
  authDomain: "diagnoseai-c326d.firebaseapp.com",
  projectId: "diagnoseai-c326d",
  storageBucket: "diagnoseai-c326d.firebasestorage.app",
  messagingSenderId: "672601106075",
  appId: "1:672601106075:web:625b11b41912949a53483e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


export async function uploadFile(file: File, setProgress?: (progress: number) => void) {
    return new Promise((resolve, reject) => {
        try{
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on('state_changed', snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                if (setProgress) {
                    setProgress(progress);
                }
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },error => {
                reject(error)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    resolve(downloadURL)
                })
            })
        } catch (error) {
            console.error("Upload failed", error)
            reject(error)
        }
    })
}