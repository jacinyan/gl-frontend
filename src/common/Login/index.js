// import React,{useState, useCallback} from 'react'

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
//     const submit = useCallback(() => {
//       loginService.login({
//         username,
//         password,
//       });
//     }, [username, password]);
  
//     return (
//       <div className="login-form">
//         <input
//           placeholder="username"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//         />
//         <input
//           placeholder="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
        
//         <button onClick={submit}>Submit</button>
//       </div>
//     );
//   };
  
//   export default Login
