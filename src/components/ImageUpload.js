import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
// Common componenets
import FormGroup from './common/FormGroup'
// import BtnSpinner from './common/BtnSpinner'
// Cut methods into dogform. Set methods as a variable name to import to this component. When you want to call it, use variableName.bind(this, <the actual parameters of the function>.)


const ImageUpload = ({handler, preview, imageSubmit, previewState, upload}) => {

  const [selectedImage, setSelectedImage] = useState('');

 

    // console.log("HANDLER: ", handler)
    // console.log("PREVIEW: ", preview)
    // console.log("IMAGE SUBMIT: ", imageSubmit)
    // console.log(upload)


  return (
    <div className='card card-container'>
      <Form onSubmit={imageSubmit} >
        <FormGroup text='Upload a photo of your dog!'>
          <Input
            type="file"
            className="form-control"
            name="image" 
            onChange={handler.bind(this)}
            value={selectedImage}
            // validations={[required]}
            />
        </FormGroup>
        <button className='btn btn-primary btn-block' type='submit'>
          Upload Image
        </button>
      </Form>
        {preview && (
          <img 
          src={previewState}
          alt='' 
          className='img-thumbnail'
          />
          )}
    </div>
  )
}

export default ImageUpload
