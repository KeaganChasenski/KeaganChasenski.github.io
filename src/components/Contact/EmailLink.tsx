export default function EmailLink() {
  return (
    <div className="contact-email-container">
      <a
        href="mailto:keagan.chasenski@email.com"
        className="contact-email-link"
      >
        <span className="contact-email-prefix">keagan.chasenski</span>
        <span className="contact-email-domain">@email.com</span>
      </a>
    </div>
  );
}
