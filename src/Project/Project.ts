import User from '../User';

export default class Project {
    ID:string;
    projectName:string;
    projectDesc:String;
    isPublic:boolean;
    maxNumberOfMembers:number;
    creatorEmail:string;
    profEmail:string;
    timeCreated:number;
    projectType:number;
    members:Array<typeof User.Base>;
    slogan:string;
    tags:Array<number>;
    constructor(project:any){
        for (const atrr in project)
            (this as any)[atrr] = project[atrr];
        // if(!this.ID)
        //     this.ID = hashFunction(Date.now().toString()).substring(0,8);
    }

    serializeAsJSON(){
        let obj:any = {};
        Object.keys(this).forEach((key)=>{
            if(typeof (this as any)[key] != typeof undefined)
                obj[key] = (this as any)[key];
        });
        // obj.members = (this.members || []).map(member=>member.serializeAsJSON());
        return obj; 
    }

    setMembers(users:typeof User.Base[]){
        this.members = users;
    }
}