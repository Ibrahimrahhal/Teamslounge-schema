
import Notification from './notification';
import NotificationType from './Notifications.types';

export default class UserJoinRequestToRelatedProjectNotification extends Notification{
    type:number = NotificationType.UserJoinRequestToRelatedProjectNotification;
    projectID:string;
    requestID:string;
    constructor(
        ID:string, 
        projectID:string, 
        userID:string, 
        JoinRequestID:string,
        read:boolean = false,
        timestamp?:number){
        super(ID, userID, read, timestamp);
        this.projectID = projectID;
        this.requestID = JoinRequestID;
    }
}