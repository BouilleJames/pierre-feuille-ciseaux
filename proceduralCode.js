const img = document.querySelectorAll('.commandes img');
const tab = ['pierre', 'feuille', 'ciseaux'];
const resultat = document.getElementById('resultat');
const msgResult = document.getElementById('msgResult');
const score = document.getElementById('score');
var scoreJ = 0;
var scoreO = 0;
img.forEach(element => {
    element.addEventListener(
        'click',
        function (e) {
            var joueur = e.currentTarget.id;
            var ordinateur = tab[Math.floor(Math.random() * 3)];
            resultat.setAttribute('src', 'img/' + ordinateur + '.png');
            resultat.setAttribute('alt', ordinateur);
            if (joueur == ordinateur) {
                msgResult.innerHTML = 'égalité';
            } else if (
                joueur == 'pierre' && ordinateur == 'ciseaux' ||
                joueur == 'feuille' && ordinateur == 'pierre' ||
                joueur == 'ciseaux' && ordinateur == 'feuille'
            ) {
                msgResult.innerHTML = 'win';
            } else {
                msgResult.innerHTML = 'loose';
            }
            switch (msgResult.textContent) {
                case 'win':
                    scoreJ += 1;
                    break;
                case 'loose':
                    scoreO += 1;
                    break;
                default:
                    scoreJ += 0;
                    scoreO += 0;
                    break;
            }
            score.innerHTML = scoreJ + '/' + scoreO;
        }
    )
});