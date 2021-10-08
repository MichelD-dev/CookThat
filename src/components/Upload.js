import { useDropzone } from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

function Upload(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <section className='container'>
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{ textAlign: 'center', height: '100px', display: 'flex' }}
      >
        <input {...getInputProps()} />
        <p style={{ margin: 'auto' }}>
          {' '}
          <FontAwesomeIcon icon={faImages} size='3x' color='#666' />
        
          <p>Ajouter une photo</p>
        </p>
      </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </section>
  )
}

export default Upload
