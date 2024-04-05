/* ************************************************************************

   Ville Software (SQville)

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com

************************************************************************ */

/**
 * CSS Rule source can be referrenced in the resource css file noted below
 * (ville/embed/iconicss.css)
 * 
 */

 qx.Class.define("ville.embed.iconicss.Abstract2",
 {
  type: "abstract", 
    
  extend : qx.ui.embed.Html,
 
  construct ()
  {
    super();

    this.setWidth(12);
    this.setHeight(12);

    this.setAllowStretchX(true);
    this.setAllowStretchY(true);

    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i[class*='icss-']", "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;");
    sheet.addRule("i[class*='icss-']:before", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
    sheet.addRule("i[class*='icss-']:after", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
  },

  properties :
  {
    // overridden
    appearance: 
    {
      refine: true,
      init: "icon"
    },
    
    /** Font size of the widget */
    size :
    {
      check : "Integer",
      init : 1,
      apply : "_applySize"
    }
  },

   members : 
  {
    _applySize (value, old)
    {
      if (value) {
        this.setHtml(`<i class="${this.getCssClass()}" style="font-size:${value}em; color:${this.getTextColor()};"></i>`);
      }
    }
  }
 });