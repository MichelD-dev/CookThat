import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'
import { storage } from '../firebase/firebase'

const FileUpload = () => {
  const [file, setFile] = useState(null)

  const handleFile = e => {
    e.preventDefault()
    setFile(e.target.files[0])
  }

  const sendForm = async e => {
    e.preventDefault()

    if (!file) return

    // on crée une référence vers le fichier dans firebase
    const imgRef = ref(storage, file.name)

   // On upload l'image
    const snapshot = await uploadBytes(imgRef, file)

    // On récupère le lien (l'url de l'image)
    const url = await getDownloadURL(snapshot.ref)
  }

  return (
    <form >
      <input type='file' onChange={handleFile} /> 
      <button onClick={sendForm}>send</button>
    </form>
  )
}

export default FileUpload
