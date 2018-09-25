  import * as React from 'react';
  import { Table, Button} from 'antd';
  import { connect } from 'react-redux';
  import { PHOTO_UPLOAD, PHOTO_UPLOAD_SUCCEEDED } from '../../constants';
  import Dropzone from 'react-dropzone';

  class MainContent extends React.Component<any, any> {
    
    constructor(props) { 
      super(props);
      this.state = {
        loading : false,
        files : []      
      };
    }
    
    uploadPhoto = async () => {        
      let result = await this.executeFileUpload();
      console.log(result);      
    }
    
    async executeFileUpload() : Promise<string> { 
      return Promise.resolve("http://lorempixel.com/800/100/cats/");
    }
    
    prepareFileToUpload = (files) => {        
      console.log(files);     
      this.setState({
        files
      });  
    }
        
    componentDidUpdate()
    {
      let data = this.props.users;
    }
    
    public render() {
      
      var self = this;      
      const { loading } = this.state;  
      
      return (   
        
        <div className="center-screen">
        <div>
        <div>
        
        <div>
        
        <div>
        
        </div>
        <div>
        <h3> <small>  Upload photos  - select a photo, crop and upload it.</small></h3>
        </div>
        
        <div>          
        <div>
  
        </div>
        </div>
        
        </div>      
        
        <div>
        <div>                
        </div>
        
        <div>
        <div> 
        
        <Dropzone accept="image/jpeg, image/png" onDrop={(files) => {        
          this.prepareFileToUpload(files);        
        }}>
        <p>Please drop your image file or click to select image to upload.</p>
        </Dropzone>

        <aside>
        <h2> Upload my file </h2>
        <ul>
        {
          this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
        }
        </ul>
        </aside>             
              
        <Button type="primary" onClick={() => {
          this.uploadPhoto();
        }} >Upload photo </Button>
        
        </div>
                
        </div>
        </div>      
        
        <div>
        </div>
        
        </div>
        </div>
        </div>
        
      );
    }
  }

  const mapStateToProps = (state : any) => {
    
    if (state.users && state.p.users)
    {    
      return {
        photos: state.photos.filename,
        success : state.photos.success,
        timestamp : state.users.timestamp     
      };
    }
    return {
      photo : state
    };
  }

  function mapDispatchToProps(dispatch) {
    return {    
      onPhotoUpload : (filename) => dispatch({ type: PHOTO_UPLOAD, payload: filename })	  
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
