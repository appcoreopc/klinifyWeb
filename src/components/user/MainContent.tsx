  import * as React from 'react';
  import { Button} from 'antd';
  import { connect } from 'react-redux';
  import { PHOTO_UPLOAD, PHOTO_UPLOAD_SUCCEEDED } from '../../constants';
  import Dropzone from 'react-dropzone';

  export class MainContent extends React.Component<any, any> {
    
    constructor(props) { 
      super(props);          
    }
    
    
    public render() {
      
      
      return (   
        
        <div className="center-screen">
        
        <div>
        <h3> <small>  Upload photos  - select a photo, crop and upload it.</small></h3>
        </div>
        
        <div> 
       
       
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
  