
export default class User_Project {

    private ID:string;
    private userID:string;
    private projectId:string;
    private timestamp:number;
    private isAdmin:boolean;
    constructor(projectId:string, userID:string, isAdmin:boolean = false, ID?:string, timestamp?:number){
        this.projectId = projectId;
        this.userID = userID;
        // this.ID = ID ||  hashFunction(projectId+userID);
        this.timestamp = timestamp || Date.now();
        this.isAdmin = isAdmin;
    }


    serializeAsJSON(){
        let obj:any = {};
        Object.keys(this).forEach((key)=>{
            if(typeof (this as any)[key] != typeof undefined)
                obj[key] = (this as any)[key];
        });
        return obj; 
    }

    getUserID():string{
        return this.userID;
    }

    getProjectID():string{
        return this.projectId;
    }
    
}