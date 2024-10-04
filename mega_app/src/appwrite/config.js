 import conf from "../conf/conf";
 import {Client,ID,Account,Databases,Storage,Query} from 'appwrite'
 export class Service{
    client=new Client();
    databases;
    bucket;
    constructor()
    {
        this.client.setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

    }

    async createPost({title,content,slug,featuredimage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                }
            )
            
        } catch (error) {

            console.log(error);
            
            
        }
    }

    async updatePost(slug,{title,content,featuredimage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    
                }
            )
            
        } catch (error) {

            console.log(error);
            
            
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {

            console.log(error);   
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {

            console.log(error);   
            return false;
        }
    }

    async getPosts(queries=[Query.equal('status','active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {

            console.log(error);   
            return false;
        }
    }

    async uploadFile(file)
    {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log(error);
            return false;
            
        }
    }
    async deleteFile(fileId)
    {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                ID.unique(),
                fileId
            )
            
        } catch (error) {
            console.log(error);
            return false;
            
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId);
          
    }
 }

 const service=new Service();
 export default service;