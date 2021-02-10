/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Global class which handles the single stylesheet used for qx.desktop.
 * 
 * 
 * 
 */
qx.Class.define("ville.embed.Manager",
{
  type : "singleton",
  extend : qx.core.Object,


  construct : function() {
    this.base(arguments);
    //load the manager if it is not loaded
    if (!this.isLoaded) {
      for (var i=0, l=ville.embed.Manager.PACKAGES.length; i<l; i++) {
        var clazz = ville.embed.Manager.PACKAGES[i];
        if (clazz) {
          if (clazz.EMBEDS) {
            qx.lang.Object.mergeWith(this.embeds, clazz.EMBEDS);
          }
          if (clazz.TEMPLATES) {
            qx.lang.Object.mergeWith(this.templates, clazz.TEMPLATES);
          }
          if (clazz.CONTENT) {
            qx.lang.Object.mergeWith(this.content, clazz.CONTENT);
          }
          if (clazz.CSS) {
            qx.lang.Object.mergeWith(this.css, clazz.CSS);
          }
          if (clazz.ANIMATIONS) {
            qx.lang.Object.mergeWith(this.animations, clazz.ANIMATIONS);
          }
          /*if (clazz.EXTERNALRESOURCES) {
            qx.lang.Object.mergeWith(this.externalresources, clazz.EXTERNALRESOURCES);
          }*/
          this.isLoaded = true;
        } else {
          //throw error
          console.log("error");
        }
      }
      this.loadRules();
    }
  },

  statics :
  {
    /**
     * Default timeout in ms for the error handling of the closure loading.
     */
    PACKAGES : [ville.embed.package.IconIcss, ville.embed.package.FluentUISvg, ville.embed.package.MaterialSvg]

  },

  members :
  {
    embeds : {},
    templates : {},
    content : {},
    css : {},
    animations : {},
    //externalresources : {},

    isLoaded : false,

    /**
     * Adds a rule to the global stylesheet.
     */
    loadRules : function() {
      var sheet = qx.ui.style.Stylesheet.getInstance();
      for(var selector in this.css) {
        sheet.addRule(selector, this.css[selector]);
      }
    }

    /**
     * Adds a rule to the global stylesheet.
     
    loadExternalResources : function() {
      for(var reslist in this.externalresources) {
        if (reslist.css){
          qx.bom.Stylesheet.includeFile();
        }
      }
    }*/
  }
});