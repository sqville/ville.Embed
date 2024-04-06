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
 * @external(ville/embed/iconicss.css)
 */

 qx.Class.define("ville.embed.iconicss.Abstract",
 {
   extend : qx.ui.basic.Label,
 
   construct ()
   {
    super();

    this.setRich(true);

    //add CSS rules to global stylesheet
    /*
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i[class*='icss-']", "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;");
    sheet.addRule("i[class*='icss-']:before", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
    sheet.addRule("i[class*='icss-']:after", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
    */
  
  },

   properties :
   {
     /** Font size of the widget */
     size :
     {
      check : "Integer",
      init : 1
     },

    /**
    * The tag to use for this element
    */
    cssClass :
    {
      check : "String",
      init : "",
      nullable : true,
      themeable : true,
      apply : "_applyCssClass"
    }
   },

   members : 
   {    
    _addIconTag (cssclass, size, color)
    {
      this.setValue(`<i class="${cssclass}" style="font-size:${size}em; color:${color};"></i>`);
    },

    // property apply
    _applyCssClass (value, old) 
    {
      this.getContentElement().removeClass(old);
      this.getContentElement().addClass(value);
    }
   }
 });