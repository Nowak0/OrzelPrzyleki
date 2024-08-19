const articles = document.querySelectorAll('.fullArticle');
articles.forEach((article, index) => {
    if (index % 2 !== 0) {
        article.style.backgroundColor = 'lightgray';
    }
});