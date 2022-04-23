/* ************************************************************************

   Ville Software (SQville)

   Copyright: 2021 sqville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

/**
 * NOTE: Instances of this class must be disposed of after use
 *
 */
 qx.Class.define("ville.embed.iconicss.Abstract",
 {
   extend : ville.embed.EmbedBase,
 
   /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */
 
   /**
    * @param none
    * 
    */
   construct : function()
   {
     this.base(arguments);
     //set default template for this group
     this.setTemplate('<i class="{{class}}" style="font-size:{{size}}em; color:inherit;"></i>');
     //this.setTemplate('<i class="${class}" style="font-size:${size}em; color:inherit;"></i>');

     //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i[class*='icss-']", "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;");
    sheet.addRule("i[class*='icss-']:before", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
    sheet.addRule("i[class*='icss-']:after", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
   },

   members : 
   {
     // overridden
    _applySize : function(value, old)
    {
      if (value) {
        this.setValue(qx.bom.Template.render(this.getTemplate(), {class : this.getCssClass(), size : value}));
      }
    }
   }
 });