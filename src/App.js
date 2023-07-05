import React from "react";
import "./App.css";
import profilePhoto from "./images/profile-photo.png";
import ProfileImage from "./components/ProfileImage";
import ContactInfo from "./components/ContactInfo";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Counter from "./components/Counter";
import MyRepos from "./components/MyRepos";

function App() {
  const username = "Sergey-Kali";
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  return (
    <>
      <div className="App">
        <aside className="aside">
          <ProfileImage imageSrc={profilePhoto} />
          <ContactInfo />
        </aside>
        <main className="main">
          <WorkExperience />
          <MyRepos username={username} token={token} />
        </main>
      </div>
      <Counter />
    </>
  );
}

export default App;
