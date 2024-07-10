// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';



// const GoogleLoginPage = () => {


//     const clientId = '655719291491-isjp346r67rdgq4s2c2b9cher7k9nbt5.apps.googleusercontent.com';
                          
//     const navigate = useNavigate();
//     // const [user, setUser] = useState(null);

//     const responseGoogle = (response) => {
//         const userObject = jwtDecode(response.credential);
//         //console.log(userObject);
//         localStorage.setItem('user', JSON.stringify(userObject));
//         // const { name, sub, picture } = userObject;

//         navigate('/home');
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="p-5 bg-white rounded-lg shadow-lg">
//                 <GoogleOAuthProvider clientId={clientId}>
//                     <GoogleLogin
//                         onSuccess={responseGoogle}
//                         onFailure={responseGoogle}
//                     />
//                 </GoogleOAuthProvider>

//             </div>
//         </div>
//     );
// };

// export default GoogleLoginPage;
