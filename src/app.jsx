
import Login from './components/login/login';
import styles from './app.module.css';
import GithubLink from './components/githublink/github';
function App({authService}) {
  return (
    <div className={styles.container}>
      <div className={styles.backGround}></div>
      <div className={styles.absolute}>
        <GithubLink/>
      </div>
      <div className={styles.section}>
        <Login authService={authService}/> 
      </div>
    </div>
  );
}

export default App;
