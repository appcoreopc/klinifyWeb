  import * as React from 'react';
  import ReactCrop from 'react-image-crop';
  import {Button} from 'antd';
  import { connect } from 'react-redux';
  
  export class CropContent extends React.Component<any, any> {
    
    constructor(props) { 
      super(props);
      this.state = {
        loading : false,
        crop :   {
            x: 20,
            y: 10,
            width: 30,
            height: 10
        }          
      };
    }
        
 render() {
           
            
      return (   
        
        <div className="center-screen">

        <div>
        <h3> <small>  Image crop </small></h3>
        </div>
                
        <div> 
        
        <ReactCrop src="./images/jeremy.png" crop={this.state.crop} />
                     
        <Button type="primary" onClick={() => {
         
        }} > Looks good </Button>
        
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
      onPhotoUpload : (filename) => dispatch({ type: 'PHOTO_CROPPED', payload: filename })	  
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CropContent);
