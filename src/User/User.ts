export default class User {
    email:string;
    firstName:string;
    lastName:string;
    userType:number;
    profileImage:string;
    skills:Array<number>;
    resume:string;
    interests:Array<number>;
    university:number;
    summery:string
    department:number;
    yearOfGrad:number;
    headline:string;

    constructor(user:any){
        for (const atrr in user)
            (this as any)[atrr] = user[atrr];
    }

    isVerfied(){
        return  typeof this.userType != typeof undefined;
    }

    serializeAsJSON(){
        let obj:any = {};
        Object.keys(this).forEach((key)=>{
            if(typeof (this as any)[key] != typeof undefined)
                obj[key] = (this as any)[key];
        });
        if(typeof obj.userType != typeof undefined)
            obj.userCompletedSignup = true;
        return obj; 
    }
}