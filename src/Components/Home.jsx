import React from 'react'
import  '../css/Home.css';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <nav className="navbar background h-nav-resp">
    <ul className="nav-list v-class-resp">
        <li> <a href="#Home"> Home </a> </li>
        <li> <a href="#About"> About </a> </li>
        <li> <a href="#Address"> Address </a> </li>
        <li> <a href="#ContactUs"> ContactUs </a> </li>
        <li> <Link to="/project"> Project </Link> </li>
    </ul>
    <div className="rightnav v-class-resp">
    </div>
    <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
</nav>
<section className="background firstsection" id="Home">
  <p>
<b> <pre className="one">EMPLOYEE MANAGEMENT SYSTEM </pre></b><br/>
</p>
</section>
<section className="section" id="Home">
    <div className="paras">
        <p className="sectiontag text-big">
        <b className="info">WHAT IS AN EMPLOYEE?</b><br/>An employee is an individual who works for an employer or a company in exchange for wages, salary, or other forms of compensation. Employees are hired to perform specific tasks, roles, or jobs within the organization. They are typically subject to the direction and control of the employer, who provides the necessary resources, guidelines, and supervision to carry out their responsibilities.
</p>
    </div>
    <div className="thumbnail">
        {/* <img src="art1.jpg" alt="error" class="image"/> */}
    </div>
</section>


<section className="sectionsectionleft" id="About">
    <div className="paras">
        <p className="sectiontag text-big">
        <b className="info">QUALIFICATIONS OF HIRING AN EMPLOYEE?</b><br/>When hiring an employee, the specific qualifications required will depend on the nature of the job and the needs of the company. Different positions may demand varying levels of education, experience, skills, and certifications. However, here are some common qualifications and considerations often taken into account during the hiring process:

</p>
    </div>
    <div className="thumbnail">
        {/* <img src="punjabi.jpg" alt="error" class="image"/> */}
    </div>
</section>


<section className="sectionsectionleft" id="Address">
    <div className="paras">
        <p className="sectiontag text-big">
        <b className="addr"> It is situated at Chint Purni Chownk, Chure Beri Bazar,<br/> Bhagtanwala, Amritsar, Punjab.</b>
        </p>
    </div>
    <div className="thumbnail">
        {/* <img src="emp2.jpg" alt="error" class="image"/> */}
    </div>
</section>


<section className="sectionsectionleft" id="ContactUs">
    <div className="paras">
        <p className="sectiontag text-big">
            <b id ="cont">CONTACT US:-</b>
        <button className="but">8264349908</button>
        <button className="but">8099434628</button>
        </p>
    </div>
    <div className="thumbnail">
        {/* <img src="punjabi.jpg" alt="error" class="image"/> */}
    </div>
</section>


<footer class="background">
        <p class="text-footer">
            website by gurnoorkaur
        </p>
    </footer>
    </div>
  )
}

export default Home
