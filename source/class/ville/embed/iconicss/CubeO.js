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
 qx.Class.define("ville.embed.iconicss.CubeO",
 {
   extend : ville.embed.iconicss.Abstract,
 
   /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */
 
   /**
    * @param size (Int)
    * @param color (Str)
    * 
    */
   construct : function(size, color)
   {
    this.base(arguments);
    //for iconicss group, we need to set the class name and add css rules to the global style sheet
    this.setCssClass("icss-cube-o");
    //add CSS rules to global style sheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-cube-o", "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; margin: .3em .3em 0 0;");
    sheet.addRule("i.icss-cube-o:before", "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; top: -.3em; left: .3em;");
    sheet.addRule("i.icss-cube-o:after", "width: .3em; height: .09em; background-color: currentColor; box-shadow: .05em .65em, .66em .66em, .7em 1.31em; transform: skewY(-45deg); transform-origin: 0 100%; top: 0; left: 0;");

    if (color != null) {
      this.setColor(color);
    }

    //render the embed by setting it's size - which sets it's value
    if (size !== undefined) {
      this.setSize(size);
    }
    //render the embed by setting it's value
    //this.setValue(qx.bom.Template.render(this.getTemplate(), {class : "icss-cube-o", size : size})); 
  }
 });