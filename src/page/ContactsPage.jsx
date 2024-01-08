import Header from '../component/Header';
import Footer from '../component/Footer';

const ContactsPage = () => {
  return (
    <>
      <Header />
      <p>Bienvenue sur la page de contact</p>
      <form action="mailto:jesse.granier@lapiscine.pro" method="post" encType="text/plain">
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="objet">Objet :</label>
        <input type="text" id="objet" name="objet" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Envoyer" />
      </form>
      <Footer />
    </>
  )
}

export default ContactsPage;