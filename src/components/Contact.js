import React, { useContext, useState } from 'react';
import '../App.css'; // Ensure the correct path to CSS
import NoteContext from '../context/notes/NoteContext'; // Correct import

const Contact = () => {
  const { addMessage, alert, setAlert } = useContext(NoteContext); // Ensure context is correctly consumed

  const [note, setNote] = useState({ name: "", email: "", subject: "", message: "" });

  // Event handler for form submission
  const handleClick = async (e) => {
    e.preventDefault();
    
    if (!note.name || !note.email || !note.subject || !note.message) {
      setAlert({ message: "All fields are required.", type: "error" });
      return;
    }

    try {
      await addMessage(note.name, note.email, note.subject, note.message);
      setNote({ name: "", email: "", subject: "", message: "" }); // Clear the form
    } catch (err) {
      console.error('Error adding message:', err);
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="dark_bg section-padding">
      <div className="container">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
          Contact <span>Me</span>
        </h2>
        <div className="row contact-form-area">
          <div className="col-md-12 col-lg-8 col-sm-8 center-div">
            <div className="contact_form wow fadeInLeft">
              <form id="main_contact_form" onSubmit={handleClick}>
                <div className="contact_input_area">
                  {alert.message && (
                    <div className={`alert alert-${alert.type}`}>
                      {alert.message}
                    </div>
                  )}
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          value={note.name}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={note.email}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={note.subject}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          rows="6"
                          name="message"
                          className="form-control"
                          placeholder="Your Message"
                          value={note.message}
                          onChange={onChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="btn btn-secondary ct_btn"
                        title="Submit Your Message!"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
