
interface ISetUserRole { 
    ids : Array<number>, 
    role : number
}

class UserApi { 
     
    private getUserUrl: string = 'http://localhost:3000/users/all';        
    private updateUserUrl : string = 'http://meetroomserver.azurewebsites.net/users/setRole';

    private fetchSettings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }        
    };
        
    async getUsers(obj : any) {  
                   
      console.log(obj);
      console.log('xxxx', this.getUserUrl);
      let result = await fetch(this.getUserUrl);
      let data = result.json();
      console.log('data');
      console.log(data);
      return data;  
    }
        
   async setUserRole( roleObj : ISetUserRole) {                 
      console.log(roleObj);    
      let result = await fetch(this.updateUserUrl, this.fetchSettings);
      let data = result.json();
      console.log('data');
      console.log(data);
      return data;  
    }    

}

export default UserApi;
