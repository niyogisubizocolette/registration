
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    alert("Welcome to Student Registration System!");
  }, []);

  const registerStudent = (e) => {
    e.preventDefault();

    if (!name || !age || !course) {
      alert("Please fill in all fields!");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      age,
      course
    };

    setStudents([...students, newStudent]);

    setName("");
    setAge("");
    setCourse("");
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Navigation Header */}
      <header className="header">
        <h2>Student System</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="container">
        <h1>Student Registration System</h1>

        <h2>Register Student</h2>

        <form onSubmit={registerStudent}>
          <input
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Student Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button type="submit">Register Student</button>
        </form>

        <h2>Search Student</h2>

        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2>Registered Students</h2>

        {filteredStudents.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <h1>About Us</h1>
        <p>
          Student Registration System is a simple React
          application designed to register students,
          manage their information and search students
          by name.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <h1>Contact Us</h1>
        <p>Email: studentregistration@gmail.com</p>
        <p>Phone: +250 700 000 000</p>
        <p>Location: Kigali, Rwanda</p>
      </section>

      <footer>
        <p>© 2026 Student Registration System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
