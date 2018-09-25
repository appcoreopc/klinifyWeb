import { SPINNER_BUSY, SPINNER_NOT_BUSY } from '../constants';

const spinner = (state:any = [], action : any) => {

  switch (action.type) {
    case SPINNER_NOT_BUSY:
      console.log(SPINNER_NOT_BUSY);
      return state;   
    case SPINNER_BUSY:    
      console.log(SPINNER_BUSY);
      return state;
    default:
      return state;
  }
}
​
export default spinner;