function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {/* Portfolio */}

        <div className="project-card">

          <h3>Portfolio Website</h3>

          <p className="project-desc">
            A modern responsive portfolio developed to showcase my skills,
            projects, resume and contact information with a clean UI.
          </p>

          <h4>Purpose</h4>

          <p>
            Helps recruiters understand my technical skills, experience and
            projects through an attractive professional portfolio.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech-stack">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>CSS3</span>
          </div>

          <h4>Features</h4>

          <ul>
            <li>Responsive Design</li>
            <li>Resume Download</li>
            <li>Contact Form</li>
            <li>MongoDB Integration</li>
          </ul>

          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Project →
          </a>

        </div>





        {/* Todo */}

        <div className="project-card">

          <h3>Todo Application</h3>

          <p className="project-desc">
            A full-stack task management application for organizing daily
            activities with complete CRUD functionality.
          </p>

          <h4>Purpose</h4>

          <p>
            Helps users efficiently manage daily tasks by allowing them to add,
            update, delete and complete tasks.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech-stack">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>

          <h4>Features</h4>

          <ul>
            <li>Create Tasks</li>
            <li>Edit Tasks</li>
            <li>Delete Tasks</li>
            <li>Task Completion</li>
          </ul>

          <a
            href="YOUR_TODO_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Project →
          </a>

        </div>






        {/* MCA Portal */}

        <div className="project-card">

          <h3>MCA Program Portal</h3>

          <p className="project-desc">
            A centralized academic platform developed for MCA students to access
            notes, syllabus, previous year question papers and important exam
            topics.
          </p>

          <h4>Purpose</h4>

          <p>
            Simplifies academic preparation by providing all semester resources
            in one organized platform.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech-stack">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>

          <h4>Features</h4>

          <ul>
            <li>Semester Notes</li>
            <li>Syllabus</li>
            <li>PYQ Download</li>
            <li>Important Topics</li>
          </ul>

          <a
            href="YOUR_MCA_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Project →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;