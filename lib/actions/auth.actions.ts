'use server'

export async function signInWithEmail(data:{
    email:string;
    password:string;
}){

    console.log("User Sign In:",data)

    // fake success response
    return {
        success:true
    }
}