import JoinRequest from './JoinRequest';
import JoinRequestUser from './JoinRequest-U';
import JoinRequestProject from './JoinRequest-P';
import JoinRequestsTypes from './JoinRequest.types';

export default {
    Base: JoinRequest,
    Types: JoinRequestsTypes,
    UserInitiated: JoinRequestUser,
    ProjectInitiated: JoinRequestProject
};