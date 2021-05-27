import React from 'react'
import { useFileUpload } from 'use-file-upload'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
 
const Submit = () => {
 
  const [file, selectFile] = useFileUpload()
 
  return (
    <div>
 
      <Button
        onClick={() => {
          // Single File Upload
          selectFile()
        }}
      >
        画像をアップロード
      </Button>
 
      {file ? (
        <div>
          <img src={file.source} alt='preview' />
          <span> Name: {file.name} </span>
          <span> Size: {file.size} </span>
        </div>
      ) : (
          <span>No file selected</span>
        )}
 
    </div>
  );
}
 
export default Submit;