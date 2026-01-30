import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, Share2, Heart, Download, Moon, Sun, Coffee, Crown } from 'lucide-react';

export default function QuoteGeneratorPro() {
  const quotesData = {
    motivation: [
      { text: "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.", author: "Mère Teresa" },
      { text: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
      { text: "N'attends pas que les choses deviennent plus faciles, deviens plus fort.", author: "Anonyme" },
      { text: "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre.", author: "Nelson Mandela" },
      { text: "Commence là où tu es. Utilise ce que tu as. Fais ce que tu peux.", author: "Arthur Ashe" },
      { text: "Les opportunités ne se présentent pas, on les crée.", author: "Chris Grosser" },
      { text: "Le seul impossible est celui qu'on ne tente pas.", author: "Anonyme" },
      { text: "Rêve grand, travaille dur, reste concentré et entoure-toi de bonnes personnes.", author: "Anonyme" },
      { text: "L'échec est le fondement de la réussite.", author: "Lao Tseu" },
      { text: "Ton attitude détermine ta direction.", author: "Anonyme" },
      { text: "La persévérance est la clé de toutes les portes.", author: "Proverbe arabe" },
      { text: "Chaque jour est une nouvelle chance de changer ta vie.", author: "Anonyme" },
      { text: "La meilleure façon de prédire l'avenir est de le créer.", author: "Peter Drucker" },
      { text: "Ce que tu fais aujourd'hui peut améliorer tous tes lendemains.", author: "Ralph Marston" },
      { text: "Crois en toi et tout devient possible.", author: "Anonyme" }
    ],
    bonheur: [
      { text: "Le bonheur n'est pas une destination, c'est une façon de voyager.", author: "Margaret Lee Runbeck" },
      { text: "Le bonheur, c'est de continuer à désirer ce qu'on possède.", author: "Saint Augustin" },
      { text: "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de nous.", author: "Dalaï Lama" },
      { text: "Le bonheur est la seule chose qui se double si on le partage.", author: "Albert Schweitzer" },
      { text: "Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé.", author: "George Sand" },
      { text: "Le bonheur c'est lorsque vos actes sont en accord avec vos paroles.", author: "Gandhi" },
      { text: "Le bonheur est parfois caché dans l'inconnu.", author: "Victor Hugo" },
      { text: "Sois heureux un instant, cet instant c'est ta vie.", author: "Omar Khayyam" },
      { text: "Le bonheur, c'est de le chercher.", author: "Jules Renard" },
      { text: "La joie de vivre est une émotion contagieuse.", author: "Anonyme" }
    ],
    sagesse: [
      { text: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.", author: "Sénèque" },
      { text: "Sois le changement que tu veux voir dans le monde.", author: "Gandhi" },
      { text: "La vie commence là où commence ta zone de confort.", author: "Neale Donald Walsch" },
      { text: "Fais de ta vie un rêve, et d'un rêve, une réalité.", author: "Antoine de Saint-Exupéry" },
      { text: "Connais-toi toi-même.", author: "Socrate" },
      { text: "Un voyage de mille lieues commence toujours par un premier pas.", author: "Lao Tseu" },
      { text: "La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas les perdre de vue.", author: "Oscar Wilde" },
      { text: "L'expérience est une lanterne que l'on porte sur le dos et qui n'éclaire que le chemin parcouru.", author: "Confucius" },
      { text: "Celui qui déplace une montagne commence par déplacer de petites pierres.", author: "Confucius" },
      { text: "Le sage apprend de ses erreurs, l'intelligent de celles des autres.", author: "Proverbe chinois" }
    ],
    amour: [
      { text: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.", author: "Antoine de Saint-Exupéry" },
      { text: "Le plus grand bonheur que puisse donner l'amour, c'est le premier serrement de main d'une femme qu'on aime.", author: "Stendhal" },
      { text: "On n'aime que ce qu'on ne possède pas tout entier.", author: "Marcel Proust" },
      { text: "Aimer, c'est trouver sa richesse hors de soi.", author: "Alain" },
      { text: "L'amour ne se prédit pas, il se construit.", author: "Anonyme" },
      { text: "Il n'y a qu'un remède à l'amour : aimer davantage.", author: "Henry David Thoreau" },
      { text: "Être aimé profondément par quelqu'un nous donne de la force, tandis qu'aimer quelqu'un profondément nous donne du courage.", author: "Lao Tseu" },
      { text: "L'amour est la poésie des sens.", author: "Honoré de Balzac" },
      { text: "Aime et fais ce que tu veux.", author: "Saint Augustin" },
      { text: "L'amour véritable commence quand on n'attend plus rien en retour.", author: "Antoine de Saint-Exupéry" }
    ],
    "succès": [
      { text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
      { text: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.", author: "Albert Schweitzer" },
      { text: "Ne juge pas chaque jour à la récolte que tu fais mais aux graines que tu sèmes.", author: "Robert Louis Stevenson" },
      { text: "Le succès, c'est tomber sept fois et se relever huit.", author: "Proverbe japonais" },
      { text: "Le talent gagne des matchs, mais le travail d'équipe et l'intelligence gagnent des championnats.", author: "Michael Jordan" },
      { text: "La réussite appartient à tout le monde. C'est au travail d'équipe qu'en revient le mérite.", author: "Frank Piccard" },
      { text: "Il n'y a pas de réussite facile ni d'échecs définitifs.", author: "Marcel Proust" },
      { text: "Le succès c'est être capable d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
      { text: "Visez la lune. Même si vous la manquez, vous atterrirez parmi les étoiles.", author: "Les Brown" },
      { text: "Le succès n'est pas définitif, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill" }
    ],
    "créativité": [
      { text: "La créativité, c'est l'intelligence qui s'amuse.", author: "Albert Einstein" },
      { text: "L'imagination est plus importante que le savoir.", author: "Albert Einstein" },
      { text: "Vous ne pouvez pas épuiser la créativité. Plus vous l'utilisez, plus vous en avez.", author: "Maya Angelou" },
      { text: "La créativité exige du courage.", author: "Henri Matisse" },
      { text: "Chaque enfant est un artiste. Le problème, c'est de rester un artiste en grandissant.", author: "Pablo Picasso" },
      { text: "La logique vous mènera d'un point A à un point B. L'imagination vous mènera partout.", author: "Albert Einstein" },
      { text: "La créativité ne s'épuise pas. Plus on s'en sert, plus on en a.", author: "Maya Angelou" },
      { text: "Un artiste ne peut pas échouer ; c'est un succès d'être un.", author: "Charles Horton Cooley" },
      { text: "L'art lave notre âme de la poussière du quotidien.", author: "Pablo Picasso" },
      { text: "La créativité, c'est inventer, expérimenter, grandir, prendre des risques.", author: "Mary Lou Cook" }
    ]
  };

  const [currentQuote, setCurrentQuote] = useState(quotesData.motivation[0]);
  const [currentCategory, setCurrentCategory] = useState('motivation');
  const [isAnimating, setIsAnimating] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showPremium, setShowPremium] = useState(false);

  const gradients = [
    'from-pink-500 via-purple-500 to-indigo-500',
    'from-orange-500 via-red-500 to-pink-500',
    'from-green-500 via-teal-500 to-blue-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-purple-500 via-pink-500 to-red-500',
    'from-blue-500 via-purple-500 to-pink-500',
    'from-teal-500 via-green-500 to-lime-500',
    'from-indigo-500 via-blue-500 to-cyan-500'
  ];

  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  const categories = [
    { name: 'motivation', emoji: '💪', label: 'Motivation' },
    { name: 'bonheur', emoji: '😊', label: 'Bonheur' },
    { name: 'sagesse', emoji: '🧘', label: 'Sagesse' },
    { name: 'amour', emoji: '❤️', label: 'Amour' },
    { name: 'succès', emoji: '🏆', label: 'Succès' },
    { name: 'créativité', emoji: '🎨', label: 'Créativité' }
  ];

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ci_favorites');
      if (stored) {
        const parsed = JSON.parse(stored);
        setFavorites(Array.isArray(parsed) ? parsed : []);
      }
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  // Persist favorites and update isFavorite when favorites change
  useEffect(() => {
    try {
      localStorage.setItem('ci_favorites', JSON.stringify(favorites));
    } catch (e) {
      // ignore quota errors
    }
    setIsFavorite(favorites.some(fav => fav.text === currentQuote.text));
  }, [favorites]);

  // Ensure isFavorite updates whenever the currentQuote changes
  useEffect(() => {
    setIsFavorite(favorites.some(fav => fav.text === currentQuote.text));
  }, [currentQuote, favorites]);

  const generateNewQuote = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const categoryQuotes = quotesData[currentCategory] || quotesData.motivation;
      let newQuote;
      do {
        newQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
        // Compare by text to avoid same content (not reference)
      } while (newQuote.text === currentQuote.text && categoryQuotes.length > 1);
      
      const newGradient = gradients[Math.floor(Math.random() * gradients.length)];
      
      setCurrentQuote(newQuote);
      setCurrentGradient(newGradient);
      setIsAnimating(false);
    }, 300);
  };

  const changeCategory = (category) => {
    setCurrentCategory(category);
    setIsAnimating(true);
    
    setTimeout(() => {
      const categoryQuotes = quotesData[category] || quotesData.motivation;
      const newQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
      const newGradient = gradients[Math.floor(Math.random() * gradients.length)];
      
      setCurrentQuote(newQuote);
      setCurrentGradient(newGradient);
      setIsAnimating(false);
    }, 300);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.text !== currentQuote.text));
      setIsFavorite(false);
    } else {
      setFavorites([...favorites, currentQuote]);
      setIsFavorite(true);
    }
  };

  const shareQuote = () => {
    const text = `"${currentQuote.text}" - ${currentQuote.author}\n\n💫 Généré avec Citations Inspirantes\n`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Citation copiée ! 📋 Partage-la sur tes réseaux sociaux !');
    }
  };

  const downloadQuote = () => {
    // Create canvas for image
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    // Gradient background (static colors for now; you can map currentGradient to hexs)
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
    gradient.addColorStop(0, '#ec4899');
    gradient.addColorStop(0.5, '#8b5cf6');
    gradient.addColorStop(1, '#6366f1');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1080);

    // Add quote text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    
    // Word wrap for quote
    const words = currentQuote.text.split(' ');
    let line = '';
    let y = 400;
    
    words.forEach((word) => {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > 900) {
        ctx.fillText(line, 540, y);
        line = word + ' ';
        y += 80;
      } else {
        line = testLine;
      }
    });
    ctx.fillText(line, 540, y);

    // Add author
    ctx.font = 'italic 40px Arial';
    ctx.fillText(`— ${currentQuote.author}`, 540, y + 120);

    // Add sparkles emoji
    ctx.font = '80px Arial';
    ctx.fillText('✨', 540, 200);

    // Download
    const link = document.createElement('a');
    link.download = 'citation-inspirante.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gray-900' 
        : `bg-gradient-to-br ${currentGradient}`
    } relative overflow-hidden`}>  
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(30px); }
        }
      `}</style>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">        
        {/* Header */}
        <div className="w-full max-w-4xl mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Sparkles className={`w-10 h-10 ${darkMode ? 'text-yellow-400' : 'text-white'} animate-pulse`} />
              <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>                Citations Inspirantes              </h1>
            </div>            
            <div className="flex gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Basculer thème"
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white bg-opacity-20 text-white'
                } hover:scale-110 transition-transform`}
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>              
              <button
                onClick={() => setShowPremium(!showPremium)}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-3 rounded-full font-bold hover:scale-110 transition-transform flex items-center gap-2"
                aria-label="Premium"
              >
                <Crown className="w-5 h-5" />
                Premium
              </button>
            </div>
          </div>
        </div>

        {/* Premium Modal */}
        {showPremium && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 max-w-md w-full shadow-2xl`}>              <div className="text-center">
                <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>                  Version Premium                </h2>
                <div className="space-y-3 text-left mb-6">                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Sans publicité</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📚</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>500+ citations exclusives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎨</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Thèmes personnalisés</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Widget pour écran d'accueil</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-6">2,99€/mois</div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all mb-3">                  Débloquer Premium                </button>
                <button 
                  onClick={() => setShowPremium(false)}
                  className={`w-full ${darkMode ? 'text-gray-400' : 'text-gray-600'} py-2`}
                >                  Plus tard                </button>
              </div>
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="w-full max-w-4xl mb-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => changeCategory(cat.name)}
                aria-label={`Catégorie ${cat.label}`}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  currentCategory === cat.name
                    ? darkMode
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-purple-600 shadow-lg scale-105'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white bg-opacity-30 text-white hover:bg-opacity-50'
                }`}
              >
                <span className="mr-2">{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Quote Card */}
        <div className={`max-w-3xl w-full ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-3xl shadow-2xl p-8 md:p-12 mb-6 transform hover:scale-105 transition-all duration-300`}>          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Sparkles className="text-yellow-400 w-16 h-16 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>          
          <div className={`transition-all duration-300 ${
            isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            <blockquote className={`text-2xl md:text-4xl font-serif ${
              darkMode ? 'text-white' : 'text-gray-800'
            } text-center mb-8 italic leading-relaxed`}>              "{currentQuote.text}"
            </blockquote>            
            <p className={`text-xl md:text-2xl ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            } text-center font-medium`}>              — {currentQuote.author}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={toggleFavorite}
              aria-pressed={isFavorite}
              className={`p-4 rounded-full transition-all duration-300 ${
                isFavorite 
                  ? 'bg-red-500 text-white scale-110 shadow-lg' 
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            >
              <Heart className={`w-7 h-7 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={generateNewQuote}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3"
            >
              <RefreshCw className="w-7 h-7" />
              Nouvelle Citation
            </button>

            <button
              onClick={shareQuote}
              className={`p-4 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title="Partager"
            >
              <Share2 className="w-7 h-7" />
            </button>

            <button
              onClick={downloadQuote}
              className={`p-4 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title="Télécharger l'image"
            >
              <Download className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Support Button */}
        <div className="mb-6">
          <button aria-label="Offrir un café" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all flex items-center gap-3">
            <Coffee className="w-6 h-6" />
            M'offrir un café ☕ (3€)
          </button>
        </div>

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className={`max-w-3xl w-full ${
            darkMode ? 'bg-gray-800' : 'bg-white bg-opacity-95'
          } rounded-2xl p-6 shadow-xl`}>            <h3 className={`text-xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            } mb-4 flex items-center gap-2`}>              <Heart className="w-6 h-6 fill-current text-red-500" />              Mes Favoris ({favorites.length})            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
              {favorites.map((quote, index) => (
                <div 
                  key={index}
                  className={`${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } p-4 rounded-xl transition-all cursor-pointer hover:shadow-lg transform hover:scale-105`}
                  onClick={() => {
                    setCurrentQuote(quote);
                    setIsFavorite(true);
                  }}
                >
                  <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'} italic mb-2`}>                    "{quote.text}"
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>                    — {quote.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-white text-opacity-80'}`}>            ✨ Partage la motivation sur tes réseaux !           </p>
        </div>
      </div>
    </div>
  );
}