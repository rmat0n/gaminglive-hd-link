// Copyright (c) 2012 Romain MATON. All rights reserved.
// Extension permettant d'ajouter un lien de téléchargement HD sur les vidéos Gaming Live de Jeux-Video.com
var data = require("sdk/self").data;
require("sdk/page-mod").PageMod({
  include: 'http://www.jeuxvideo.com/gaming-live/*',
  contentScriptFile: [ data.url("jquery-1.7.2.js"), data.url("link.js") ]
});
