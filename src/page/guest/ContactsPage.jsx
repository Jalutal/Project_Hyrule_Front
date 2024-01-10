import Header from '../../component/guest/Header';
import Footer from '../../component/guest/Footer';
import "./contactsPage.scss";

const ContactsPage = () => {
  return (
    <body>
    <main>
    <div className="main_rectangle">
      <Header />
      <div className='form'>
      <h1>Bienvenue sur la page de contact</h1>
      <p>Laissez-nous votre message, nous y répondrons dans les meilleurs délais.</p>
      <form action="mailto:jesse.granier@lapiscine.pro" method="post" encType="text/plain" className='form_contact'>
        <div className='form_align'>
          <div>
            <label htmlFor="nom">Nom :</label>
          </div>
          <div>
            <input type="text" id="nom" name="nom" required />
          </div>
        </div>
        <div className='form_align'>
          <div>
            <label htmlFor="email">Email :</label>
          </div>
          <div>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className='form_align'>
          <div>
            <label htmlFor="objet">Objet :</label>
          </div>
          <div>
            <input type="text" id="objet" name="objet" required />
          </div>
        </div>
        <div className='form_align'>
          <div>
            <label htmlFor="message">Message :</label>
          </div>
          <div>
            <textarea id="message" name="message" required></textarea>
          </div>
        </div>
        <div className='form_align'>
            <input type="submit" value="Envoyer" />
        </div>
      </form>
      </div>
      </div>
      <Footer />
    </main>
    </body>
  )
}

export default ContactsPage;