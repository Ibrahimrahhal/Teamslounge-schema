import Notification from './notification';
import NotificationType from './Notifications.types';


export default class ProjectJoinRequestNotification extends Notification{
    type:number = NotificationType.ProjectJoinRequestNotification;
    projectID:string;
    requestID:string;

    constructor(
        ID:string, 
        projectID:string, 
        userID:string, 
        RequestID:string, 
        read:boolean = false, 
        timestamp?:number){
        super(ID, userID, read, timestamp);
        this.projectID = projectID;
        this.requestID = RequestID;
    }
}
