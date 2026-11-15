import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="text-page">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1>We’d love to hear from you.</h1>
      <p>Send us a question or suggestion using the form below.</p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        onChange={() => setSubmitted(false)}
      >
        <label className="contact-field" htmlFor="contact-name">
          <span>Name</span>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="contact-field" htmlFor="contact-email">
          <span>Email</span>
          <input id="contact-email" name="email" type="email" required />
        </label>

        <label className="contact-field" htmlFor="contact-message">
          <span>Message</span>
          <textarea id="contact-message" name="message" rows="5" required />
        </label>

        <button className="primary-button" type="submit">Submit</button>
      </form>

      {submitted && (
        <p className="contact-success" role="status">
          Thanks, {name}! Your message was submitted in this demo.
        </p>
      )}
    </section>
  )
}

export default Contact
