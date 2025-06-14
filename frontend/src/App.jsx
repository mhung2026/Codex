import React from 'react';
import './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1>AllianceITSC - Accompanying businesses on the digital transformation journey</h1>
        <p>AllianceITSC is a trusted technology partner, specializing in providing software solutions, IT services and digital transformation consulting, helping businesses develop sustainably in the digital age.</p>
        <ul>
          <li>Flexible solutions</li>
          <li>Safety &amp; Security</li>
          <li>Team of experienced experts</li>
          <li>24/7 service</li>
        </ul>
        <nav>
          <a href="#contact">Contact now</a>
          <a href="#services">See more Services</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>Established with the goal of becoming a comprehensive technology partner, AllianceITSC has been accompanying many Vietnamese and international enterprises on the journey of digitizing operations, optimizing processes and enhancing competitiveness.</p>
        <h3>Mission</h3>
        <p>Providing advanced, safe and effective IT solutions, helping customers achieve their business goals.</p>
        <h3>Vision</h3>
        <p>To become the leading technology company in Vietnam in the field of software development and digital transformation consulting.</p>
        <h3>Core values</h3>
        <ul>
          <li>Quality: Committed to the highest standard of service.</li>
          <li>Creativity: Always innovating, leading the way in technology.</li>
          <li>Accompanying: Understanding and long-term commitment with customers.</li>
          <li>Security: Ensuring absolute data security.</li>
        </ul>
      </section>

      <section id="services">
        <h2>Our Solutions and Services</h2>
        <ul>
          <li>Custom Software Development</li>
          <li>Digital Transformation Consulting</li>
          <li>Cloud Solutions</li>
          <li>IT Security Services</li>
          <li>System Integration</li>
          <li>Data Analysis &amp; Reporting (BI)</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Successful Projects</h2>
        <p>AllianceITSC has implemented hundreds of large and small projects for the following fields:</p>
        <ul>
          <li>Finance &amp; Banking</li>
          <li>Retail &amp; E-commerce</li>
          <li>Transportation &amp; Logistics</li>
          <li>Manufacturing</li>
          <li>Healthcare</li>
        </ul>
      </section>

      <section id="news">
        <h2>Technology Knowledge &amp; Trends</h2>
        <p>Featured technology news. Share experiences, practical case studies. Instructions for applying new technology.</p>
      </section>

      <section id="contact">
        <h2>Connect with us</h2>
        <p>Let AllianceITSC become your trusted technology partner. Contact us now for free consultation!</p>
        <address>
          <p>Address: 02 Nguyen Huy Luong, Binh Thanh</p>
          <p>Hotline: 0988888888</p>
          <p>Email: admin@allianceitsc.com</p>
        </address>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} AllianceITSC. All rights reserved.</p>
        <p>Quick links: Home | Services | Projects | News | Contact.</p>
      </footer>
    </>
  );
export default function App() {
  return <h1>Welcome to Alliance Software</h1>;
}
