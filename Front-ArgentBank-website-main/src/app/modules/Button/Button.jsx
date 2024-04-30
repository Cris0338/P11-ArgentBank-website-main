// Button.jsx

import React from 'react';
import "./Button.scss";

function Button({ text, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;


// // examples for integration with other components:
// // In Home.jsx
// import Button from './Button';

// function Home() {
//   const handleSubmit = () => {
//     // Logica per inviare un form
//   };

//   return (
//     <div>
//       {/* Altri contenuti della Home... */}
//       <Button text="Invia Form" onClick={handleSubmit} />
//     </div>
//   );
// }

// // In Login.jsx
// import Button from './Button';

// function Login() {
//   const handleLogin = () => {
//     // Logica per il login
//   };

//   return (
//     <div>
//       {/* Altri elementi del login... */}
//       <Button text="Accedi" onClick={handleLogin} />
//     </div>
//   );
// }

// // In AccountPage.jsx
// import Button from './Button';

// function AccountPage() {
//   const handleAccountAccess = () => {
//     // Logica per accedere al conto
//   };

//   return (
//     <div>
//       {/* Altri elementi della pagina del conto... */}
//       <Button text="Accedi al Conto" onClick={handleAccountAccess} />
//     </div>
//   );
// }
