import Notification from './notification';
import NotificationType from './Notifications.types';
export default class JoinRequestAnsweredNotification extends Notification{
    type:number = NotificationType.JoinRequestAnsweredNotification;
    requestID:string;
    constructor(
        ID:string, 
        userID:string, 
        RequestID:string, 
        read:boolean = false, 
        timestamp?:number){
        super(ID, userID, read, timestamp);
        this.requestID = RequestID;
    }
}