import conf from '../conf/conf.js'
import {Client,ID,Account} from 'appwrite'
export class Authservice{
    client=new Client();
    account;
    constructor()
    {
        this.client.setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)

    }
    async Signup({email,password,name}){

        try {
            const useraccount=await this.account.create(ID.unique(),email,password,name);
            if(useraccount){
                this.login({email,password})
            }
            else{
                return useraccount;
            }
        } catch (error) {
            throw error;
            
        }

    }
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }
}


const authservice=new Authservice();

export default authservice;

