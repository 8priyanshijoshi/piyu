// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { auth, db } from '../firebaseConfig';
// import { onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';

// const RoleProtectedRoute = ({ children, allowedRole }) => {
//   const [isAllowed, setIsAllowed] = useState(null); // null = loading
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (!user) {
//         setIsAllowed(false);
//         setChecking(false);
//         return;
//       }

//       try {
//         const userDoc = await getDoc(doc(db, 'users', user.uid));
//         const role = userDoc.exists() ? userDoc.data().role : null;
//         setIsAllowed(role === allowedRole);
//       } catch (error) {
//         console.error('Error checking role:', error);
//         setIsAllowed(false);
//       } finally {
//         setChecking(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [allowedRole]);

//   if (checking) return <p>Checking access...</p>;

//   return isAllowed ? children : <Navigate to="/login" replace />;
// };

// export default RoleProtectedRoute;
