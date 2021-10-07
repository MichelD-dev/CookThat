// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
// import { useState } from 'react'
// import { storage } from '../firebase/FirebaseStorage'

// const FileUpload = () => {
//   const [file, setFile] = useState(null)

//   const handleFile = e => {
//     setFile(e.target.files[0])
//   }

//   const sendForm = async ev => {
//     ev.preventDefault()

//     if (!file) return

//     // on créé un référence vers le fichier dans firebase
//     const imgRef = ref(storage, file.name)

//     // On upload l'image
//     const task = await uploadBytes(imgRef, file)

//     // On récupére le liens (l'url de l'image)
//     const url = await getDownloadURL(task.snapshot.ref)
//   }

//   return (
//     <form onSubmit={sendForm}>
//       <input type='file' onChange={handleFile} value={file} />
//       <button>send</button>
//     </form>
//   )
// }

// export default FileUpload
