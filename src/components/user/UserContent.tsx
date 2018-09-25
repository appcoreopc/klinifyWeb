import * as React from 'react';
import { Table, Button} from 'antd';
import { connect } from 'react-redux';
import { PHOTO_UPLOAD, PHOTO_UPLOAD_SUCCEEDED } from '../../constants';

class MainContent extends React.Component<any, any> {
  
  constructor(props) { 
    super(props);
    this.state = {
      selectedRowKeys: [],
      loading : false, 
      data : [],
      timestamp : 0 
    };
  }
  
  uploadPhoto = () => {  
    this.props.onPhotoUpload('test');    
  }
  
  componentDidUpdate()
  {
    let data = this.props.users;
  }
  
  public render() {
    
    let success = false;
    var self = this;
    
    if (this.props.users)
    {
      //let data  = this.props.users;
      if (this.props.success && this.props.success == true) {
        
        let usersData = this.props.users;        
        
        let stateTimestamp = this.state.timestamp; 
        let propTimestamp = this.props.timestamp; 
        
        if (stateTimestamp != propTimestamp)
        {
          usersData.json().then(function(jsonData) { 
            self.setState({
              data : jsonData,
              timestamp : propTimestamp           
            });        
          }); 
        }
      }  
    }           
    
    const { loading, selectedRowKeys } = this.state;  
    const hasSelected = selectedRowKeys.length > 0;
            
    
    return (   
      
      <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="dashboard_graph">
      
      <div className="row x_title">
      
      <div className="col-md-2">
      
      </div>
      <div className="col-md-4">
      <h3> <small>  Upload photos  - select a photo, crop and upload it. 
      
      
      </small></h3>
      </div>
      
      <div className="col-md-6">          
      <div id="reportrange" className="pull-right">
      <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
      
      </div>
      </div>
      
      </div>      
      
      <div className="row x_title">
      <div className="col-md-2 col-sm-12 col-xs-12">                
      </div>
      
      <div className="col-md-10 col-sm-12 col-xs-12">
      <div> 
      
      <input type='file' name='image' />
      
      <Button type="primary" onClick={() => {
        this.uploadPhoto();
      }} >Upload photo </Button>
      
      
      <span style={{ marginLeft: 8 }}>
      
      {hasSelected ? `Upload file ${selectedRowKeys.length} items` : ``}
      
      </span>
      </div>
      
      
      </div>
      </div>      
      
      <div className="clearfix">
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
