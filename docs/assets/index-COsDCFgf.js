var ne=Object.defineProperty;var ie=(e,r,t)=>r in e?ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var c=(e,r,t)=>ie(e,typeof r!="symbol"?r+"":r,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const S of o.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&a(S)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const V=["Absent","Arc","Abricot","Acheter","Acteur","Affaire","Affiche","Ajouter","Album","Alphabet","Appareil","Après","Ail","Aliment","Adresse","Aider","Accoucher","Aiguille","Aller","Agiter","Arroser","Attraper","Avancer","Amener","Ami","Amusant","Anorak","Ananas","Artichaut","Autostop","Appartement","Ascenseur","Attention","Appuyer","Apporter","Angle","Armoire","Attendre","Ampoule","Au-Delà","Au-Dessous","Au-Dessus","Arrosoir","Assis","Assiette","Avant","Avion","Bas","Bagage","Baguette","Balcon","Banc","Bande-Dessinée","Balle","Bâiller","Barbe","Bateau","Baigner","Barboter","Bague","Baleine","Ballon","Banane","Barrer","Bibliothèque","Bifteck","Bonhomme de neige","Bouée","Beaucoup","Berger","Boucher","Bouger","Boucherie","Boulanger","Boulangerie","Boutique","Bus","Bois","Bureau","Blond","Bosser","Bonnet","Bout","Botte","Bouton","Bretelle","Bricolage","Bruit","Boîte","Bouchon","Bouteille","Bulles","Bras","Brun","Cabinet","Cabane","Cachalot","Calendrier","Cheminée","Chaussette","Cahier","Carnet","Caniveau","Caravane","Carrefour","Cave","Carreau","Carnaval","Carton","Casier","Caisse","Casserole","Cartable","Camarade","Canard","Cadeau","Caméscope","Carré","Carte","Cassette","Catalogue","Chaise","Chanson","Chaîne","Cher","Chevalier","Chez","Chiffre","Chirurgien","Chose","Chou de Bruxelles","Cirque","Ciseaux","Coffre-fort","Conte","Contraire","Coûter","Cravate","Crochet","Crocodile","Cube","Curling","Cédérom","Café","Carotte","Cerise","Chocolat","Citron","Citrouille","Clémentine","Charcuterie","Chaud","Cinéma","Classe","Clé","Clou","Clin","d'œil","Cloche","Clignoter","Croiser","Clocher","Clown","Coiffeur","Colis-Route","Courrier","Croix","Colère","Copain","Coquin","Cuillère","Cuvette","Crayon","Coloriage","Coin","Colle","Couper","Couché","Couloir","Calme","Curieux","Chanter","Chaussette","Chercher","Choisir","Chuchoter","Coller","Colorier","Commencer","Comparer","Compter","Contre","Concombre","Coquillage","Corbeille","Crabe","Crevette","Construire","Continuer","Copier","Couper","Couleur","Craie","Cravate","Cagoule","Casque","Casquette","Ceinture","Chapeau","Chausson","Chaussure","Chemise","Cigarette","Col","Collant","Couronne","Culotte","Dictionnaire","Différence","Dinosaure","Distributeur","Doigt","Domino","Dé","Découpage","Déménager","Désobéir","Déborder","Distribuer","Défendre","Derrière","Devant","Debout","Dedans","Dehors","Directeur","Directrice","Différent","Déchirer","Décoller","Décorer","Découper","Demander","Démolir","Dépêcher","Dessiner","Dire","Discuter","Dessin","Droit","Dossier","Dormir","Doucher","Douche","Doux","Eau","École","Éclairer","Écriture","Éclabousser","Écharpe","Épée","Échanger","Envoyer","Entonnoir","Entrée","Escalier","Étagère","Étude","Écran","Écureuil","Église","Élastique","Éternuer","Étiquette","Extérieur","Expliquer","Écrire","Emmener","Emporter","Embouteillage","Endive","Endroit","Enveloppe","Essence","Esthéticienne","Encore","Entrer","Étudier","Énervé","Écouter","Effacer","Effort","Élève","Enfant","Entendre","Entourer","Envoyer"," Enlever","Essuyer","Fatigue","Faute","Facteur","Farine","Ficelle","Fil","Film","Fleuriste","Foire","Forme","Formule 1","Fourchette","Fourmilier","Fille","Fenêtre","Fermer","Finir","Fouiller","Feuille","Feutre","Fée","Flèche","Fusil","Flotter","Fraise","Framboise","Frapper","Froid","Fromage","Fruit","Gant","Garçon","Gardien","Garer","Genou","Glace","Gâteau","Génie","Gentil","Gouttes","Grand","Gomme","Gonfler","Gronder","Handicapé","Hameçon","Habit","Haut","Halloween","Haricot","Hippocampe","Histoire","Hockey sur gazon","Huître","Hôpital","Hôtel","Humide","Idée","Igloo","Île","Image","Immeuble","Important","Impossible","Incendie","Index","Instrument","Intrus","Inséparable","Intérieur","Imiter","Inonder","Intéressant","Jambe","Jaloux","Jouer","Jean","Jeu de cartes","Jouet","Judo","Jumelles","Jupe","Kangourou","Kebab","Képi","Kidnappé","Kilomètre","Kimono","Kiwi","Koala","Kraken","Kung-fuLavabo","Laver","Lacet","Laine","Lacer","Laisse","Lampe à huile","Ligne","Limousine","Lion","Liste","Loin","Lourd","Lunettes","Léger","Légume","Lecture","Litre","Lire","Lit","Laisser","Livre","Linge","LettreMarche","Matelas","Maternelle","Main","Magie","Magnétoscope","Maillot","Manche","Manteau","Madame","Maître","Maîtresse","Marionnette","Marteau","Magasin","Magazine","Magicien","Mamie","Mammouth","Mannequin","Manège","Marchand","Marin","Mayonnaise","Melon","Mer","Moineau","Momie","Monde","Monnaie","Monument","Mot","Mouette","Moule","Médicament","Métal","Mètre","Morceau","Moteur","Mensonge","Meuble","Mettre","Mélanger","Milieu","Moins","Mouchoir","Moufle","Mouillé","Montrer","Moulin","Mousse","Mur","Montre","Micro","Mine","Modèle","Musique","Moyen","Muet,Nager","Navet","Navire","Neveu","Niche","Noisette","Noix","Notre Dame","Nourriture","Noyer","Noir","Nouveau","Nœud","Nom","Nombre","Obéir","Obliger","Objet","Orchestre","Oignon","Orange","Ordinateur","Ours polaire","Oursin","Outil","Ouvrier","Ouvrir","Ordre","Œuf de Pâques","Papier","Partage","Patauger","Parler","Paire","Pantalon","Page","Palais","Panier","Panneau","Paquet","Parc","Passage","Payer","Perle","Perroquet","Persil","Peser","Petit","Pharmacie","Pharmacien","Photographier","Pion","Pirate","Piscine","Pizza","Place","Plage","Plein","Pli","Pliage","Plombier","Poire","Poireau","Pois","Police","Policier","Pomme","Pompier","Porter","Poste","Printemps","Prise électrique","Prix","Promenade","Prudent","Prune","Près","Président de la république","Puzzle","Pyjama","Pâte à modeler","Pâtes","Père-Noël","Pétanque","Pêche","Pêcher","Personne","Peu","Photo","Pied","Pleuvoir","Plonger","Pluie","Peinture","Pont","Pointe","Pousser","Pouvoir","Poster","Pouce","Poisson","Pont","Pot","Prénom","Prêter","Priver","Promettre","Punir","Pêcheur","Peluche","Placard","Planche","Plâtre","Plafond","Plus","Portemanteau","Pinceau","Poubelle","Poli","Propre","Poser","Peindre","Plier","Présent","Presser","Préparer","Poche","Prince","Pull-Over","Point","Quartier"," Quai","Qualité","Question","Quiproquo","Quantique","Queue","Quête","Quota","Quotidien","Radiateur","Radio","Rayure","Rampe","Ranger","Raconter","Raisin","Ramer","Ramper","Reconnaître","Rendre","Ressembler","Retrouver","Revoir","Riz","Robe de mariée","Rond","Rouge à lèvres","Ruche","Réalisateur","Recommencer","Refuser","Réciter","Récréation","Recevoir","Remplir","Renverser","Rentrée","Rentrer","Rester","Retard","Remettre","Répéter","Répondre","Regarder","Reine","Roi","Ruban","Rideau","Robinet","Robe","Roux","Roue","Sac plastique","Salle","Savon","Sage","Sale","Saladier","Sage-femme","Salade","Saluer","Samedi","Sardine","Savoir","Spéléologie","Square","Squash","Sucre","Scie","Seau","Sérieux","Serrure","Serviette","Séparer","Sentir","Siège","Sieste","Sens","Sécher","Sec","Serrer","Semelle","Soldat","Sorcière","Souffler","Silence","SMS","Sous","Souris","Sol","Sommeil","Sonnette","Sortie","Sortir","Sonner","Souligner","Sourd","Sourire","Stylo,Tache","Taille","Talon","Tissu","Tricot","Tambour","Table","Tableau","Tabouret","Tablier","Tailler","Taille-Crayon","Tapis","Tasse","Tailleur","Tampon","Tard","Terre","Thé","Timbre","Titre","Tomate","Tour Eiffel","Travaux","Trousse","Trouver","Twitter","Tôt","Télécommande","Téléphone","Télévision","Tenir","Terminer","Tiroir","Tirer","Trait","Trompette","Tournevis","Toilette","Tranquille","Transparent","Tricher","Trempé","Tourner","Toucher","Travail","Travailler","Trier","Trous","Trop","Uniforme","Usine","Ultrason","Unanime","Union","Unique","Univers","Urbain","Urgent","Urgences","USB","Usurpateur","UV","Vague","Valise","Varicelle","Vendre","Visiter","Venir","Vis","Véhicule","Verre","Veste","Vêtement","Verser","Vider","Viande","Vin","Village","Ville","Voisin","Volet","Voiture","Vitre","Voix","Voile","Vouloir","W-C","Xylophone","Yacht","Zéro"],U=["Sauter à la corde","Faire la vaisselle","Livrer un colis","Jouer du ukulélé","Faire des crêpes","Traire une vache","Manger un hamburger","Lire un livre en braille","Chanter la Marseillaise","Couper du bois","Avoir mal aux dents","raclette","Sortir le chien","Sauter en parachute","Regarder la télé","Grimper à un arbre","Sauter du plongeoir","Jouer aux Legos","Lire dans les lignes de la main","Se laver les dents","Se coiffer les cheveux","Allumer une bougie","Étendre le linge","Tomber amoureux","Poker","Faire ses devoirs","Cueillir des pommes","Ramasser des champignons","Changer un bébé","Danser le tango","Claquer une porte","Avoir une idée","Courir un marathon","Tondre la pelouse","Être en retard","À un de ces quatre","Les doigts dans le nez","Vouloir le beurre et l'argent du beurre","Toucher du bois","Regarder les mouches voler","Pisser dans un violon","Dormir sur ses deux oreilles","Prendre son pied","L'habit ne fait pas le moine","Poser un lapin","Cucul la praline","Au ras des pâquerettes","Pleurer à chaudes larmes","Tomber dans les pommes","Bonnet blanc et blanc bonnet","Un froid de canard","Tourner autour du pot","Point barre","Avoir plusieurs cordes à son arc","Être la cinquième roue du carrosse","Prendre le taureau par les cornes","Appuyer sur le champignon","Sans queue ni tête","Ne pas avoir les yeux en face des trous","L'arbre qui cache la forêt","Les bras m'en tombent","Au pied de la lettre","En avoir par dessus la tête","Ouvrir un livre","Se couper les cheveux en quatre","À côté","Au milieu","À moitié","À l'endroit","À l'envers","À droite","À gauche","En bas","En face","En haut","S'asseoir","Se coucher","S'endormir","S'ennuyer","S'installer","Se lever","Se presser","Se réchauffer","Se reposer","Se réveiller","S'excuser","Se fâcher","Se quitter","Se taire","S'habiller","Se changer","Se chausser","Se couvrir","Se déguiser","Se déshabiller","S'amuser"];function oe(e){return Math.floor(Math.random()*e)}function $(e){return e.split("").reverse().join("")}function se(e){const r=new URL(window.location.href);if(e==null)return r;e=$(e),e=encodeURIComponent(e);const t=r.searchParams.get("words");t!==null?(r.searchParams.set("words",t+"_"+e),history.pushState({},"",r)):(r.searchParams.set("words",e),history.pushState({},"",r))}function ae(e){return e.sort(()=>Math.random()-.5)}const B=class B{constructor(r){c(this,"timerText");c(this,"interval");c(this,"seconds");c(this,"minutes");c(this,"onTimerEnd");this.timerText=document.getElementById(r),this.interval=null,this.seconds=0,this.minutes=0,this.onTimerEnd=[]}start(){this.seconds=B.INITIAL_TIME_SECONDS%60,this.minutes=Math.floor(B.INITIAL_TIME_SECONDS/60),this.resume()}resume(){(this.seconds>0||this.minutes>0)&&(this.interval||(this.updateDisplay(),this.interval=window.setInterval(()=>{this.updateTimer()},1e3)))}stop(){this.interval&&(clearInterval(this.interval),this.interval=null)}reset(){this.stop(),this.seconds=0,this.minutes=0,this.updateDisplay()}forceEnd(){this.seconds=1,this.minutes=0,this.updateTimer()}isRunning(){return this.interval!==null}updateTimer(){if(--this.seconds,this.seconds===60&&(this.seconds=0,--this.minutes),this.updateDisplay(),this.minutes===0&&this.seconds<=0){this.stop();for(var r of this.onTimerEnd)r()}}updateDisplay(){const r=this.minutes.toString().padStart(2,"0"),t=this.seconds.toString().padStart(2,"0");this.timerText.textContent=`${r}:${t}`}};c(B,"INITIAL_TIME_SECONDS",30);let F=B;class N{constructor(r,t=0){c(this,"name");c(this,"totalScore");c(this,"roundScore");this.name=r,this.totalScore=t,this.roundScore=0}}let n,l=0;function I(){console.log("Adding a team"),n.push(new N((n.length+1).toString())),console.log("Total is",n.length,"players")}function H(){++l,l>n.length-1&&(l=0)}function J(){console.log("Resetting teams"),n=[],I(),l=0}function ue(){return n.length===0?new N("?"):n[l]}function le(){return n}function _(){return l===n.length-1}function de(){return console.log("Adding a point to team",l),n[l].roundScore++,n[l].roundScore}function ce(){return new URL(window.location.href).searchParams.getAll("p")}function me(){console.log("reading scores from URL"),n=[];const e=ce();if(e!==null&&(n==null?void 0:n.length)>0)for(const r of e){const t=r.split("_")[0],a=r.split("_")[1];t!==null&&a!==null&&!Number.isNaN(parseInt(a))&&n.push(new N(t,parseInt(a)))}else I(),l=0}function he(){l=0;for(let e in n)n[e].totalScore+=n[e].roundScore,n[e].roundScore=0}const x=15,C=new F("timer");var T=(e=>(e[e.Description=0]="Description",e[e.Word=1]="Word",e[e.Signs=2]="Signs",e[e.End=3]="End",e))(T||{});let s,h,u=[],E=[];function pe(){s&&E.push(s),de(),E.length>=x?(s=void 0,C.forceEnd()):w()}function fe(){s&&u.push(s),w()}function ge(){Q(()=>{s&&(u.unshift(s),s=void 0)})}function Ce(){h<3?(w(),C.start(),ge()):console.error("END OF GAME ===== NOT IMPLEMENTED")}function Se(){C.stop()}function ye(){C.reset()}function ve(){C.resume()}function Pe(){he(),++h,h<3&&(H(),z(),E=[])}function K(){z(),me(),J(),E=[],h=0,s=""}function Q(e){C.onTimerEnd.push(()=>e())}function Te(){K(),C.reset(),J();const e=new URL(window.location.href);e.searchParams.delete("words"),history.pushState({},"",e)}function G(){return s?!0:u!==null&&u.length>0}function be(){return x-E.length}function Me(){return C.isRunning()}function z(){u=[];const r=new URL(window.location.href).searchParams.get("words"),t=r!==null?r==null?void 0:r.split("_"):[];for(const a of t){if(u.length===x)break;u.push($(decodeURIComponent(a)))}ae(u)}function w(){u===null&&(u=[]),u.length+E.length<x?(s=V.concat(U)[oe(V.length+U.length)],se(s)):s=u.shift()}let m,b,j,X,Y,Z,q,D,O,y,g,L,p,f,d,A,v,R,M;function Ee(e,r,t,a,i,o,S,te){console.log("User output init"),q=e,j=r,X=t,Y=a,D=i,Z=o,m=S,b=te}function Ae(e,r,t){y=e,g=r,L=t,y.addEventListener("click",()=>Fe()),g.addEventListener("click",()=>Ne()),L.addEventListener("click",()=>Ie()),Q(re)}function Re(e,r,t,a,i,o,S){O=e,p=r,f=t,v=a,R=i,M=o,A=S,p.addEventListener("click",()=>Be()),f.addEventListener("click",()=>Le()),v.addEventListener("click",()=>De()),R.addEventListener("click",()=>k()),M.addEventListener("click",()=>{k(),W(),M.style.display="none"}),A.addEventListener("click",()=>W())}function Be(){fe(),P()}const Le=()=>{pe(),P()};function De(){H(),ee()}function k(){I(),ee()}function xe(e){d=e;const r=()=>{console.log("Resetting game"),Te(),m.innerText="Prêts à commencer ?",y.hidden=!1,q.hidden=!0,D.hidden=!0,b.style.visibility="hidden",O.style.visibility="hidden",g.hidden=!0,g.style.visibility="visible",L.hidden=!0,p.style.display="initial",f.style.display="initial",A.style.display="none",v.style.display="initial",M.style.display="none",d.style.visibility="hidden"};e.addEventListener("click",()=>r()),G()||(d.style.visibility="hidden")}function ee(){P(),y.hidden=!1,p.disabled=!0,f.disabled=!0,p.style.display="initial",f.style.display="initial",v.style.display="none",R.style.display="none",M.style.display="none",A.style.display="none",d.style.visibility="hidden"}function W(){Pe(),P(),y.hidden=!1,D.hidden=!0,A.style.display="none",R.style.display="none",v.style.display="none",d.style.visibility="visible"}function qe(e){e.addEventListener("click",()=>{ye(),re()})}function P(){j.innerText=(h+1).toString(),h===T.Description?m.innerText="Faites deviner en décrivant :":h===T.Word?m.innerText="Faites deviner avec un seul mot :":h===T.Signs&&(m.innerText="Faites deviner en mimant :");var e=ue();X.innerText=e?e.name:"inconnue",Y.innerText=e?e.roundScore.toString():"0",G()?s!==void 0&&Me()?(b.innerText=s,b.style.visibility="visible"):(m.innerText="En attente des joueurs",b.style.visibility="hidden"):h===T.End-1?(m.innerText=`Partie terminée
`,q.hidden=!0,D.hidden=!0,le().forEach(r=>{m.innerText+=`
 Equipe `+r.name+" : "+r.totalScore+" points"})):m.innerText="Tous les mots ont été devinés. Fin du round",Z.innerText=be().toString()}function Fe(){console.log("(Re)Starting game"),Ce(),P(),y.hidden=!0,D.hidden=!1,q.hidden=!1,O.style.visibility="visible",f.disabled=!1,p.disabled=!1,g.hidden=!1,d.style.visibility="visible",d.disabled=!0,p.style.display="inline",f.style.display="inline",v.style.display="none",R.style.display="none"}function Ne(){console.log("Stopping timer"),Se(),P(),f.disabled=!0,p.disabled=!0,g.hidden=!0,L.hidden=!1,d.disabled=!1}function Ie(){console.log("Resuming timer"),ve(),P(),f.disabled=!1,p.disabled=!1,g.hidden=!1,L.hidden=!0,d.disabled=!0}function re(){console.log("end of timer"),m.innerText="Fin du temps !",b.style.visibility="hidden",y.hidden=!0,g.style.visibility="hidden",p.style.display="none",f.style.display="none",d.disabled=!1,G()?(v.style.display="inline",_()&&(R.style.display="inline")):h<T.End-1&&(_()&&(M.style.display="inline"),A.style.display="inline"),d.style.visibility="visible"}const Ge=document.querySelector("#header");Ge.href=window.location.pathname;const we=document.querySelector("#score_group"),Oe=document.querySelector("#round"),Ve=document.querySelector("#team"),Ue=document.querySelector("#score"),_e=document.querySelector("#instruction"),ke=document.querySelector("#word"),We=document.querySelector("#time_management"),$e=document.querySelector("#remaining"),He=document.querySelector("#start"),Je=document.querySelector("#pause"),Ke=document.querySelector("#resume"),Qe=document.querySelector("#turn_buttons"),ze=document.querySelector("#skip_word"),je=document.querySelector("#guessed_word"),Xe=document.querySelector("#next_team"),Ye=document.querySelector("#add_team"),Ze=document.querySelector("#add_team_next_round"),er=document.querySelector("#next_round"),rr=document.querySelector("#reset_game"),tr=document.querySelector("#end_timer");K();Ee(we,Oe,Ve,Ue,We,$e,_e,ke);Ae(He,Je,Ke);Re(Qe,ze,je,Xe,Ye,Ze,er);xe(rr);qe(tr);
