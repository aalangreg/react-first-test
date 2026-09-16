import React from 'react';
import { Container } from 'react-bootstrap';
import ListeProgrammes from './ListeProgrammes';
import styles from './Contenu.module.css';

export default function Contenu({ sectionActive }) {
  return (
    <div>


      {sectionActive === 'accueil' && (

        <div>
            <h1>Acceuil</h1>
        </div>
      )}


      {sectionActive === 'formations' && (

        <section id="formations" className={styles.section}>

            <Container>

              <div className={styles.sectionHeader}>

                  <span className={styles.smallTitle}>
                      NOS PROGRAMMES
                  </span>

                  <h2>
                      Trouvez la formation qui vous ressemble
                  </h2>

                  <p>
                      Des programmes conçus pour préparer les étudiants.
                  </p>

              </div>

                <ListeProgrammes />
            </Container>
      </section>
      )}

      {sectionActive === 'a-propos' && (

        <div>
           <h1>À propos</h1>
        </div>
      )}


      {sectionActive === 'contact' && (

        <div>
           <h1>Contact</h1>
        </div>
      )}


    </div>
  );
}
