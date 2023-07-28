/* ************************************************************************

   Ville Software (SQville)

   Copyright: 2023 sqville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

/**
 * CSS Rule source can be referrenced in the resource css file noted below
 * (ville/embed/iconicss.css)
 * 
 */

 qx.Class.define("ville.embed.iconicss.Abstract",
 {
   extend : ville.embed.EmbedBase,
 
   construct ()
   {
    super();

    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i[class*='icss-']", "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;");
    sheet.addRule("i[class*='icss-']:before", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
    sheet.addRule("i[class*='icss-']:after", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
   },

   members : 
   {
    // overridden
    _applySize (value, old)
    {
      if (value) {
        this.setValue(`<i class="${this.getCssClass()}" style="font-size:${value}em; color:${this.getColor()};"></i>`);
      }
    }
   }
 });