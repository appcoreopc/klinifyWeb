import { PHOTO_UPLOAD_SUCCEEDED, PHOTO_UPLOAD } from '../constants';

const photos = (state:any = [], action : any) => {

  switch (action.type) {    
      
    case PHOTO_UPLOAD_SUCCEEDED:
      console.log(PHOTO_UPLOAD_SUCCEEDED, action);      
      return {
        users : action.users, 
        success : true,
        timestamp : Date.now()        
      };    
    case PHOTO_UPLOAD:
        console.log(PHOTO_UPLOAD, state);
        return state;     
    default:
      return state;
  }
}
​
export default photos;