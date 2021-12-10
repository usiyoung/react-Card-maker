import { getAuth, GithubAuthProvider,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
class AuthService {
    login(providerName){
        let provider;
        if(providerName === 'Github'){
            provider = new GithubAuthProvider();
        }else if(providerName === 'Google'){
            provider = new GoogleAuthProvider();
        }
        const auth = getAuth();
        console.log(auth);
        signInWithPopup(auth, provider)
        .then(result =>{
            const credential = provider.credentialFromResult(result);
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GithubAuthProvider.credentialFromError(error);
        })
    }
}

export default AuthService;