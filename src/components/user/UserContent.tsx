  import * as React from 'react';
  import { Table, Button} from 'antd';
  import { connect } from 'react-redux';
  import { PHOTO_UPLOAD, PHOTO_UPLOAD_SUCCEEDED } from '../../constants';
  import Dropzone from 'react-dropzone';
  import Cropper from 'react-cropper';


  class MainContent extends React.Component<any, any> {
    
    src : string = '';
    cropper : any;

    constructor(props) { 
      super(props);
      this.state = {
        loading : false,
        files : [],
        src : this.src,
        cropResult: null
      };


      this.cropImage = this.cropImage.bind(this);
      this.onChange = this.onChange.bind(this);
      this.useDefaultImage = this.useDefaultImage.bind(this);
      this.src = 'images/child.jpg';
    }
    
    
    uploadPhoto = async () => {        
      let result = await this.executeFileUpload();
      console.log(result);      
    }
    
    async executeFileUpload() : Promise<string> { 
      return Promise.resolve("http://lorempixel.com/800/100/cats/");
    }

    onChange(e) {
      e.preventDefault();
      let files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({ src: reader.result });
      };
      reader.readAsDataURL(files[0]);
    }

    onChange2(e) {
    
      let files = e;

      // if (e.dataTransfer) {
      //   files = e.dataTransfer.files;
      // } else if (e.target) {
      //   files = e.target.files;
      // }
     
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({ src: reader.result });
      };
      reader.readAsDataURL(files[0]);
    }


  
    cropImage() {
      if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
        return;
      }
      this.setState({
        cropResult: this.cropper.getCroppedCanvas().toDataURL(),
      });

      let imageurl = this.cropper.getCroppedCanvas().toDataURL();
      console.log(imageurl);
     
    }
  
    useDefaultImage() {

      this.setState({ src : this.src });
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

              <Button type="primary" onClick={this.cropImage}> Crop image </Button>
            
          </div>

            
        <div style={{ width: '100%' }}>
          <input type="file" onChange={this.onChange} />
         
          <br />
          <br />
          <Cropper
            style={{ height: 400, width: '100%' }}
            aspectRatio={16 / 9}
            preview=".img-preview"
            guides={false}
            src={this.state.src}
            ref={cropper => { this.cropper = cropper; }}
          />
        </div>
        
          <div>
            <div className="box" style={{ width: '50%', float: 'right' }}>
              <h1>Preview</h1>
              <div className="img-preview" style={{ width: '100%', float: 'left', height: 300 }} />
            </div>
            <div className="box" style={{ width: '50%', float: 'right' }}>             
              <img style={{ width: '100%' }} src={this.state.cropResult} alt="cropped image" />
            </div>
          </div>
          <br style={{ clear: 'both' }} />

        
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
