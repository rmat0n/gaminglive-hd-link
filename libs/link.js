// Copyright (c) 2012 Romain MATON. All rights reserved.
// Extension permettant d'ajouter un lien de téléchargement HD sur les vidéos Gaming Live de Jeux-Video.com
$(document).ready(function () {
  'use strict';
  var $videoUrl = $('.row .header-video meta[itemprop="contentUrl"]');
  console.log('GAMING LIVE: '+ $videoUrl.attr('content'));
  if ($videoUrl.length) {
    $('.row .player-contenu').closest('.row').after(
      '<div class="row" style="margin-bottom: 10px;">' +
        '<div class="col-md-8">' +
          '<div style="text-align: right; margin-right: 5px;">' +
            '<a href="' + $videoUrl.attr('content') + '" download>T&eacute;l&eacute;charger la vid&eacute;o en HD</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
});
