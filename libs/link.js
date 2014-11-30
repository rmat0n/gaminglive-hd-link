// Copyright (c) 2012 Romain MATON. All rights reserved.
// Extension permettant d'ajouter un lien de téléchargement HD sur les vidéos Gaming Live de Jeux-Video.com
$(document).ready(function () {
  'use strict';
  var $mp4 = $("#mp4");
  if ($mp4.length) {
    var $mp4HD = $mp4.clone();
    $mp4HD.attr("id", "mp4HD")
      .find("a").attr("href", $mp4.find("a").attr("href").replace("-low", "-high"))
      .css({"display": "table-cell", "vertical-align": "middle", "text-align": "center"})
      .find("span").text("HD")
      .css({"position": "relative", "left": "0px", "color": "white"});
    $("#barre_fonctions").append($mp4HD);
  }
});
