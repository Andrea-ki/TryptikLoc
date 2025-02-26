fetch('http://tonsite/api.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Traitement des données pour affichage sur ton site
    })
    .catch(error => console.error('Erreur:', error));
