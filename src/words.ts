const words = ["Montre", "Pêcheur", "Écureuil", "Baleine", "Souris", "Hippocampe", "Ruche", "Ordinateur", "Niche", "Mamie", "Dinosaure", "Pêcher", "Limousine", "Chevalier", "Oeuf de Pâques", "Bonhomme de neige", "Poireau", "Cravate", "Robe de mariée", "Pyjama", "Bague", "Varicelle", "Lion", "Barbe", "Pizza", "Ciseaux", "Trousse", "Rouge à lèvres", "Écharpe", "Chaise", "Cadeau", "Ballon", "Lunettes", "Arrosoir", "Index", "Genou", "Domino", "Pirate", "Magicien", "Père Noël", "Momie", "Cirque", "Fourchette", "Poubelle", "Crocodile", "Glace", "Coffre-fort", "Igloo", "Tour Eiffel", "Notre Dame", "Prise électrique", "Calendrier", "Cheminée", "Chaussette", "Jeu de cartes", "Pétanque", "Autostop", "Sage-femme", "Plombier", "Président de la république", "Marionnettiste", "Berger", "Génie", "Esthéticienne", "Printemps", "Artichaut", "Pâte à modeler", "Farine", "Mayonnaise", "Twitter", "Lampe à huile", "Huître", "Moule", "Chou de bruxelles", "Tailleur", "Déménager", "Ramper", "Neveu", "Acteur", "Ours polaire", "Samedi", "Halloween", "Spéléologie", "Perroquet", "Éternuer", "Judo", "Curling", "Formule 1", "Réalisateur", "Mammouth", "Fourmilier", "Chirurgien", "Mannequin", "Hockey sur gazon", "Oursin", "Cachalot", "Distributeur", "Squash", "Accoucher", "Sauter à la corde", "Faire la vaisselle", "Livrer un colis", "Jouer du ukulélé", "Faire des crèpes", "Traire une vache", "Manger un hamburger", "Lire un livre en braille", "Chanter la Marseillaise", "Écrire un SMS", "Couper du bois", "Avoir mal aux dents", "raclette", "Sortir le chien", "Sauter en parachute", "Regarder la télé", "Grimper à un arbre", "Sauter du plongeoir", "Jouer aux lego", "Lire dans les lignes de la main", "Se laver les dents", "Se coiffer les cheveux", "Allumer une bougie", "Étendre le linge", "Tomber amoureux", "Poker", "Faire ses devoirs", "Cueillir des pommes", "Ramasser des champignons", "Changer un bébé", "Danser le tango", "Claquer une porte", "Avoir une idée", "Courir un marathon", "Tondre la pelouse", "Être en retard", "Un de ces quatre", "Les doigts dans le nez", "Vouloir le beurre et l'argent du beurre", "Toucher du bois", "Regarder les mouches voler", "Pisser dans un violon", "Dormir sur ses deux oreilles", "Prendre son pied", "L'habit ne fait pas le moine", "Poser un lapin", "Cucul la praline", "Au ras des pâquerettes", "Pleurer à chaudes larmes", "Tomber dans les pommes", "C'est bonnet blanc et blanc bonnet", "Un froid de canard", "Tourner autour du pot", "Point barre", "Avoir plusieurs cordes à son arc", "Être la cinquième roue du carrosse", "Prendre le taureau par les cornes", "Appuyer sur le champignon", "Sans queue ni tête", "Ne pas avoir les yeux en face des trous", "L'arbre qui cache la forêt", "Les bras m'en tombent", "Au pied de la lettre", "En avoir par dessus la tête", "angle", "armoire", "banc", "bureau", "cabinet", "carreau", "chaise", "classe", "clé", "coin", "couloir", "dossier", "eau", "école", "écriture", "entrée", "escalier", "étagère", "étude", "extérieur", "fenêtre", "intérieur", "lavabo", "lecture", "lit", "marche", "matelas", "maternelle", "meuble", "mousse", "mur", "peluche", "placard", "plafond", "porte", "portemanteau", "poubelle", "radiateur", "rampe", "récréation", "rentrée", "rideau", "robinet", "salle", "savon", "serrure", "serviette", "siège", "sieste", "silence", "sol", "sommeil", "sonnette", "sortie", "table", "tableau", "tabouret", "tapis", "tiroir", "toilette", "vitre", "w-c", "aller", "amener", "apporter", "appuyer", "s'asseoir", "attendre", "bâiller", "bosser", "se coucher", "dormir", "éclairer", "écrire", "emmener", "emporter", "s'endormir", "s'ennuyer", "entrer", "étudier", "fermer", "frapper", "s'installer", "se lever", "lire", "ouvrir", "se presser", "se réchauffer", "rentrer", "se reposer", "rester", "se réveiller", "sonner", "sortir", "tricher", "venir", "absent", "assis", "bas", "couché", "haut", "présent", "à côté", "à droite", "à gauche", "au milieu", "au-delà", "au-dessous", "au-dessus", "debout", "dedans", "dehors", "en bas", "en face", "en haut", "loin", "près", "tard", "tôt", "après", "avant", "contre", "dans", "de", "derrière", "devant", "du", "sous", "sur", "crayon", "stylo", "feutre", "taille-crayon", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "découpage", "pliage", "pli", "colle", "affaire", "boîte", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "dé", "domino", "puzzle", "cube", "perle", "chose", "forme : carré", "rond", "pâte à modeler", "tampon", "livre", "histoire", "bibliothèque", "image", "album", "titre", "bande dessinée", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "étiquette", "affiche", "alphabet", "appareil", "caméscope", "cassette", "cédérom", "chaîne", "chanson", "chiffre", "contraire", "différence", "doigt", "écran", "écriture", "film", "fois", "idée", "instrument", "intrus", "lettre", "liste", "magnétoscope", "main", "micro", "modèle", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prénom", "question", "radio", "sens", "tambour", "télécommande", "téléphone", "télévision", "trait", "trompette", "voix", "xylophone", "zéro", "chanter", "chercher", "choisir", "chuchoter", "coller", "colorier", "commencer", "comparer", "compter", "construire", "continuer", "copier", "couper", "déchirer", "décoller", "décorer", "découper", "demander", "démolir", "se dépêcher", "dessiner", "dire", "discuter", "écouter", "écrire", "effacer", "entendre", "entourer", "envoyer", "faire", "finir", "fouiller", "goûter", "imiter", "laisser", "lire", "mettre", "montrer", "ouvrir un livre", "parler", "peindre", "plier", "poser", "prendre", "préparer", "ranger", "réciter", "recommencer", "regarder", "remettre", "répéter", "répondre", "sentir", "souligner", "tailler", "se taire", "tenir", "terminer", "toucher", "travailler", "trier", "adresse", "appartement", "ascenseur", "balcon", "boucherie", "boulanger", "boulangerie", "boutique", "bus", "caniveau", "caravane", "carrefour", "cave", "charcuterie", "cinéma", "cirque", "clin d'œil", "cloche", "clocher", "clown", "coiffeur", "colis-route", "courrier", "croix", "église", "embouteillage", "endroit", "enveloppe", "essence", "facteur", "fleuriste", "foire", "hôpital", "hôtel", "immeuble", "incendie", "laisse", "magasin", "manège", "médicament", "moineau", "monde", "monument", "ouvrier", "palais", "panneau", "paquet", "parc", "passage", "pharmacie", "pharmacien", "piscine", "place", "police", "policier", "pompier", "poste", "promenade", "quartier", "square", "timbre", "travaux", "usine", "village", "ville", "voisin", "volet", "barrer", "clignoter", "se croiser", "garer", "photographier", "reconnaître", "retrouver", "revoir", "saluer", "savoir", "se toucher", "se trouver", "visiter", "important", "impossible", "prudent", "chez", "abricot", "ail", "aliment", "ananas", "banane", "bifteck", "café", "carotte", "cerise", "chocolat", "chou", "citron", "citrouille", "clémentine", "concombre", "coquillage", "corbeille", "crabe", "crevette", "endive", "farine", "fraise", "framboise", "fromage", "fruit", "gâteau", "haricot", "huile", "légume", "marchand", "melon", "monnaie", "navet", "noisette", "noix", "nourriture", "oignon", "orange", "panier", "pâtes", "pêche", "persil", "petit pois", "poire", "poireau", "pomme", "pomme de terre", "prix", "prune", "queue", "raisin", "riz", "salade", "sucre", "thé", "tomate", "viande", "vin", "acheter", "ajouter", "coûter", "payer", "peser", "rendre", "vendre", "cher", "léger", "lourd", "plein", "baleine", "bouée", "île", "jumelles", "marin", "mer", "mouette", "navire", "pêcheur", "plage", "poisson", "port", "sardine", "serviette", "vague", "voile", "se noyer", "ramer", "nager", "angle", "armoire", "banc", "bureau", "cabinet", "carreau", "chaise", "classe", "clé", "coin", "couloir", "dossier", "eau", "école", "écriture", "entrée", "escalier", "étagère", "étude", "extérieur", "fenêtre", "intérieur", "lavabo", "lecture", "lit", "marche", "matelas", "maternelle", "meuble", "mousse", "mur", "peluche", "placard", "plafond", "porte", "portemanteau", "poubelle", "radiateur", "rampe", "récréation", "rentrée", "rideau", "robinet", "salle", "savon", "serrure", "serviette", "siège", "sieste", "silence", "sol", "sommeil", "sonnette", "sortie", "table", "tableau", "tabouret", "tapis", "tiroir", "toilette", "vitre", "w-c", "crayon", "stylo", "feutre", "taille-crayon", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "découpage", "pliage", "pli", "colle", "affaire", "boîte", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "dé", "domino", "puzzle", "cube", "perle", "chose", "forme : carré", "rond", "pâte à modeler", "tampon", "livre", "histoire", "bibliothèque", "image", "album", "titre", "bande dessinée", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "étiquette", "affiche", "alphabet", "appareil", "caméscope", "cassette", "cédé", "cédérom", "chaîne", "chanson", "chiffre", "contraire", "différence", "doigt", "écran", "écriture", "film", "fois", "idée", "instrument", "intrus", "lettre", "liste", "magnétoscope", "main", "micro", "modèle", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prénom", "question", "radio", "sens", "tambour", "télécommande", "téléphone", "télévision", "trait", "trompette", "voix", "xylophone", "zéro", "aller", "amener", "apporter", "appuyer", "s'asseoir", "attendre", "bâiller", "bosser", "se coucher", "dormir", "éclairer", "écrire", "emmener", "emporter", "s'endormir", "s'ennuyer", "entrer", "étudier", "fermer", "frapper", "s'installer", "se lever", "lire", "ouvrir", "se presser", "se réchauffer", "rentrer", "se reposer", "rester", "se réveiller", "sonner", "sortir", "tricher", "venir", "absent", "assis", "bas", "couché", "haut", "présent", "aider", "défendre", "désobéir", "distribuer", "échanger", "s'excuser", "expliquer", "se fâcher", "gronder", "obéir", "obliger", "partager", "prêter", "priver", "promettre", "punir", "se quitter", "raconter", "refuser", "séparer", "à côté", "à droite", "à gauche", "au milieu", "au-delà", "au-dessous", "au-dessus", "debout", "dedans", "dehors", "en bas", "en face", "en haut", "loin", "près", "tard", "tôt", "blond", "brun", "calme", "curieux", "différent", "doux", "énervé", "gentil", "grand", "handicapé", "inséparable", "jaloux", "moyen", "muet", "noir", "nouveau", "petit", "poli", "propre", "roux", "sage", "sale", "sérieux", "sourd", "tranquille", "chanter", "chercher", "choisir", "chuchoter", "coller", "colorier", "commencer", "comparer", "compter", "construire", "continuer", "copier", "couper", "déchirer", "décoller", "décorer", "découper", "demander", "démolir", "se dépêcher", "dessiner", "dire", "discuter", "écouter", "écrire", "effacer", "entendre", "entourer", "envoyer", "faire", "finir", "fouiller", "goûter", "imiter", "laisser", "lire", "mettre", "montrer", "ouvrir un livre", "parler", "peindre", "plier", "poser", "prendre", "préparer", "ranger", "réciter", "recommencer", "regarder", "remettre", "répéter", "répondre", "sentir", "souligner", "tailler", "se taire", "tenir", "terminer", "toucher", "travailler", "trier", "ami", "attention", "camarade", "colère", "copain", "coquin", "dame", "directeur", "directrice", "droit", "effort", "élève", "enfant", "fatigue", "faute", "fille", "garçon", "gardien", "madame", "maître", "maîtresse", "mensonge", "ordre", "personne", "retard", "sourire", "travail", "arrosoir", "assiette", "balle", "bateau", "boîte", "bouchon", "bouteille", "bulles", "canard", "casserole", "cuillère", "cuvette", "douche", "entonnoir", "gouttes", "litre", "moulin", "pluie", "poisson", "pont", "pot", "roue", "sac en plastique", "saladier", "seau", "tablier", "tasse", "trous", "verre", "agiter", "s'amuser", "arroser", "attraper", "avancer", "baigner", "barboter", "boucher", "bouger", "déborder", "doucher", "éclabousser", "essuyer", "envoyer", "flotter", "gonfler", "inonder", "jouer", "laver", "mélanger", "mouiller", "nager", "patauger", "pleuvoir", "plonger", "pousser", "pouvoir", "presser", "recevoir", "remplir", "renverser", "sécher", "serrer", "souffler", "tirer", "tourner", "tremper", "verser", "vider", "vouloir", "amusant", "chaud", "froid", "humide", "intéressant", "mouillé", "sec", "transparent", "à moitié", "autant", "beaucoup", "encore", "moins", "peu", "plus", "trop", "à l'endroit", "à l'envers", "anorak", "arc", "bagage", "baguette", "barbe", "bonnet", "botte", "bouton", "bretelle", "cagoule", "casque", "casquette", "ceinture", "chapeau", "chaussette", "chausson", "chaussure", "chemise", "cigarette", "col", "collant", "couronne", "cravate", "culotte", "écharpe", "épée", "fée", "flèche", "fusil", "gant", "habit", "jean", "jupe", "lacet", "laine", "linge", "lunettes", "magicien", "magie", "maillot", "manche", "manteau", "mouchoir", "moufle", "nœud", "paire", "pantalon", "pied", "poche", "prince", "pull-over", "pyjama", "reine", "robe", "roi", "ruban", "semelle", "soldat", "sorcière", "tache", "taille", "talon", "tissu", "tricot", "uniforme", "valise", "veste", "vêtement", "se changer", "se chausser", "se couvrir", "se déguiser", "se déshabiller", "enlever", "s'habiller", "lacer", "porter", "ressembler", "aiguille", "ampoule", "avion", "bois", "bout", "bricolage", "bruit", "cabane", "carton", "clou", "colle", "crochet", "élastique", "ficelle", "fil", "marionnette", "marteau", "métal", "mètre", "morceau", "moteur", "objet", "outil", "peinture", "pinceau", "planche", "plâtre", "scie", "tournevis", "vis", "voiture", "véhicule", "carnaval"]

const GAME_WORDS_NUMBER = 10

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

/**
 * Adds a query string parameter in the provided url.
 * Update parameter if it already exists.
 * Does nothing if value is null or undefined.
 *
 * @param {string} url to modify
 * @param {string} value of query parameter
 *
 * @returns {string} modified url.
 */
function addToWordsQueryStringParameter(word: string) {
  const url = new URL(window.location.href)
  if (word === null || word === undefined) {
    return url
  }  

  word = encodeURIComponent(word)

  const currentWords = url.searchParams.get('words')
  if (currentWords !== null) {
    url.searchParams.set('words', currentWords + '_' + word)
    history.pushState({}, '', url)
  } else {
    url.searchParams.set('words', word)
    history.pushState({}, '', url)
  }
}

function setRandomWord(word: HTMLParagraphElement) {
    const currentWords = getCurrentWords()
  if (currentWords === null || currentWords.length <= GAME_WORDS_NUMBER) {
    const wordIndex = getRandomInt(words.length)
    word.innerText = 'Le mot est : '+ words[wordIndex]
    addToWordsQueryStringParameter(words[wordIndex])
  } else {
    const wordIndex = getRandomInt(currentWords.length)
    word.innerText = 'Le mot est : '+ decodeURIComponent(currentWords[wordIndex])
  }
}

function getCurrentWords() : Array<string>|null {
  const url = new URL(window.location.href)
  const currentWords = url.searchParams.get('words')

  return currentWords !== null ? currentWords?.split('_') : null
}


function checkEndOfRound(nextButton: HTMLButtonElement, guessButton: HTMLButtonElement,
  resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement, text: HTMLParagraphElement): Boolean {
  const currentWords = getCurrentWords()
  if (currentWords !== null && currentWords?.length >= GAME_WORDS_NUMBER) {
    text.innerText = 'Fin du round'
    nextButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'inline'
    return true
  } else {
    guessButton.style.display = 'inline'
    resetButton.style.display = 'inline'
    return false
  }
}

export function loadGame(nextButton: HTMLButtonElement, guessButton: HTMLButtonElement,
  resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement) {
  console.log('loading game')
   
  const currentWords = getCurrentWords()
  if (currentWords !== null && currentWords?.length > 0) {
    resetButton.style.display = 'inline'
    if (currentWords?.length >= GAME_WORDS_NUMBER) {
      nextButton.style.display = 'none'
      guessButton.style.display = 'none'
      nextRoundButton.style.display = 'inline'
    } else {
      nextButton.innerText = 'Passer le mot'
      nextButton.style.display = 'inline'
      guessButton.style.display = 'inline'
      nextRoundButton.style.display = 'none'
    }
  } else {
    resetButton.style.display = 'none'
  }
}

export function setupNextWord(button: HTMLButtonElement, guessButton: HTMLButtonElement,
  resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement, word: HTMLParagraphElement) {
  console.log('next word button setup')
  const nextWord = () => {
    if (!checkEndOfRound(button, guessButton, resetButton, nextRoundButton, word)) {
      button.innerText = 'Passer le mot'
      setRandomWord(word)
    }
  }
  button.addEventListener('click', () => nextWord())
}

export function setupGuessedWord(button: HTMLButtonElement, nextButton: HTMLButtonElement,
  resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement, word: HTMLParagraphElement) {
  console.log('guessed word button setup')

  const guessedWord = () => {
    if (checkEndOfRound(nextButton, button, resetButton, nextRoundButton, word)) {
      // TODO arrêt timer
      return
    }
    // TODO ajouter un point

    setRandomWord(word)
  }

  button.addEventListener('click', () => guessedWord())
}

export function setupResetWords(button: HTMLButtonElement, nextButton: HTMLButtonElement,
   guessButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement, word: HTMLParagraphElement) {
  console.log('reset words button setup')

  const resetWords = () => {
    // Reset words in URL
    const url = new URL(window.location.href)
    url.searchParams.delete('words')
    history.pushState({}, '', url)

    // Reset buttons and current word
    word.innerText =''
    button.style.display = 'none'
    nextButton.innerText = 'RESTART'
    nextButton.style.display = 'inline'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
  }

  button.addEventListener('click', () => resetWords())
}

export function setupNextRound(button: HTMLButtonElement, nextButton: HTMLButtonElement, 
  guessButton: HTMLButtonElement, resetButton: HTMLButtonElement, word: HTMLParagraphElement) {
  console.log('next round button setup')

  const nextRound = () => {
    // TODO start timer
    button.style.display = 'none'
    
    word.innerText =''
    button.style.display = 'none'
    nextButton.innerText = 'Passer le mot'
    nextButton.style.display = 'inline'
    guessButton.style.display = 'inline'
    resetButton.style.display = 'inline'

    setRandomWord(word)
  }

  button.addEventListener('click', () => nextRound())
}
