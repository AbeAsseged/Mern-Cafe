//W14D2 part 5 cont. w14d2 notes 
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'

function AuthPage(props) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage

















//W13D4 part 3 
// import SignUpForm from "../../components/SingUpForm/SignUpForm.jsx"

// function AuthPage() {
//   return (
//     <main>
//     <div>AuthPage</div>
//     <SignUpForm />
//     </main>
//   )
// }

// export default AuthPage