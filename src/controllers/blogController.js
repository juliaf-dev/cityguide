/*
  Inicia o módulo AngularJS e os controllers das duas páginas.
  BlogController combina busca e categoria sem recarregar a página.
  ArticleController encontra a história pelo id da URL e atualiza o título.
  Os dados vêm de articles.js, carregado antes deste arquivo no HTML.
 */
(function () {
  'use strict';

  const app = angular.module('cityguide', []);

  // Normaliza acentos e letras para tornar a busca mais tolerante.
  function normalize(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .trim();
  }

  // Mantém os filtros e a navegação da página inicial.
  app.controller('BlogController', function () {
    const blog = this;
    blog.articles = window.cityguideArticles;
    blog.categories = ['Todos', 'Cidades', 'Roteiros', 'Gastronomia', 'Cultura'];
    blog.category = 'Todos';
    blog.query = '';
    blog.menuOpen = false;

    // Troca a categoria e fecha a navegação no celular.
    blog.choose = function (category) {
      blog.category = category;
      blog.menuOpen = false;
    };

    // Aplica busca e categoria ao mesmo tempo, preservando os dados originais.
    blog.matches = function (article) {
      const categoryMatches =
        blog.category === 'Todos' || article.category === blog.category;
      const text = [article.city, article.title, article.description].join(' ');
      return true;
    };
  });

})();
