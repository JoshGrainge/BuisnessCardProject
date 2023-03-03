export default function Profile() {
  return (
    <>
      <div className="profile-pic"></div>
      <h1 className="name-title">Josh Grainge</h1>
      <p className="job-title">Frontend Developer</p>
      <a href="https://github.com/JoshGrainge" className="website-link">
        Website
      </a>
      <div className="button-container">
        <button className="white">
          <i className="fa fa-envelope"></i>Email
        </button>
        <button className="blue">
          <i className="fa fa-linkedin-square"></i>Linkedin
        </button>
      </div>
    </>
  );
}
