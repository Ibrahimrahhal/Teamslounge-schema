import NotificationType from "./Notifications.types";


export default abstract class Notification {
    ID:string;
    read:boolean;
    userID:string;
    timestamp:number;
    abstract type:NotificationType;
    constructor(
        ID:string, 
        UserID:string, 
        read:boolean = false, 
        timestamp:number = Date.now()){
        this.read = read;
        this.userID = UserID;
        this.timestamp = timestamp;
        // ID = ID || GenerateRandomID();
    }

    markAsRead():void{
        this.read = true;
    }

    isRead():boolean{
        return this.read;
    }

    serializeAsJSON(){
        let obj:any = {};
        Object.keys(this).forEach((key)=>{
            if(typeof (this as any)[key] != typeof undefined)
                obj[key] = (this as any)[key];
        });
        return obj; 
    }
}