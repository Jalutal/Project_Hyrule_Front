import { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from '../component/Footer';
import CategoriesDetail from './CategoriesDetail'; // Importe le composant CategoriesDetail

const Categories = () => {
  const [fictions, setFictions] = useState(null);
  const [uniqueCategories, setUniqueCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchFictions = async () => {
      try {
        const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");
        const fictionsResponseData = await fictionsResponse.json();
        setFictions(fictionsResponseData);
      } catch (error) {
        console.error('Erreur lors de la récupération des fictions:', error);
      }
    };

    fetchFictions();
  }, []);

  useEffect(() => {
    // Si les fictions existent, extrayez les catégories uniques
    if (fictions) {
      const categoriesSet = new Set(fictions.map(fiction => fiction.category));
      setUniqueCategories(Array.from(categoriesSet));
    }
  }, [fictions]);

  const handleCategoryClick = (index) => {
    const selectedCategory = uniqueCategories[index];
    setSelectedCategory(selectedCategory);
  };

  return (
    <body>
      <main>
        <div className="main_rectangle">
          <Header />
          <div className="content-container">
            <section>
              <h1>Catégories d'univers :</h1>
              {uniqueCategories ? (
                <>
                  {uniqueCategories.map((category, index) => (
                    <article key={index}>
                      <button onClick={() => handleCategoryClick(index)}>
                        <h3>{category}</h3>
                      </button>
                    </article>
                  ))}
                </>
              ) : (
                <p>En cours de chargement</p>
              )}
            </section>
            {selectedCategory && (
          <CategoriesDetail category={selectedCategory} />
        )}
          </div>
          <Footer />
        </div>

        
      </main>
    </body>
  );
};

export default Categories;
