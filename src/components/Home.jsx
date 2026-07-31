import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home">
      {/* Left Side */}
      <div className="hero-left">
        <h3>Hello, I'm</h3>

        <h1>Sunny Kumar</h1>

        <h2>Full Stack Developer</h2>

        <p>
          MCA Student at
          <br />
          GL Bajaj Institute of Technology and Management
        </p>

        <a
          href="/Sunny_Kumar_Resume.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <div className="image-card">
          <img src={profile} alt="Sunny Kumar" />
        </div>
      </div>
    </section>
  );
}

export default Home;