import { 
    getAuth, 
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup, 
    onAuthStateChanged,
    signOut} from "firebase/auth";
class AuthService {
    constructor(){
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }

    getProvider(providerName){
        switch(providerName){
            case 'Google':
                return this.googleProvider;
            case 'Github':
                return this.githubProvider;
            default:
                throw new Error(`not supproted provider:${providerName}`)
        }
    }
 
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }
    
    logout(){
        signOut(this.firebaseAuth);
    }

    onAuthChanged(onUserChanged){
        return onAuthStateChanged(this.firebaseAuth, (user)=>{
            onUserChanged(user);
        })
    }
   
}

export default AuthService;