  
/* This class represent Join Request sent from project admin */

import JoinRequest, { markWithMithSingleUsers } from './joinRequest';
import JoinRequestsTypes from './JoinRequest.types';

export default class ProjectJoinRequest extends JoinRequest {
    type:number = JoinRequestsTypes.ProjectJoinRequest;
    markAsAccepted:markWithMithSingleUsers = (message:string)=>{
        this.accepted = true;
        this.acceptionMessage = message;
    }

    markAsRejected:markWithMithSingleUsers = (message:string)=>{
        this.rejected = true;
        this.rejectionMessage = message;
    }
}