import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email"); // Retrieve email from localStorage (this is where you saved it during login)
    const password = localStorage.getItem("password"); // Retrieve password if needed for validation
    
    // Fetch all users and filter by both email and password
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        const foundUser = data.find(
          (user) => user.email === email && user.password === password
        );
        if (foundUser) {
          setUser(foundUser);
        } else {
          console.error("User not found or password does not match.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      {user ? (
        <>
          <h2 className="text-center">User Profile</h2>
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
