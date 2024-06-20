/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.material.${{classname}}",
{
  extend : ville.embed.material.Abstract,

  statics :
  {
    FILLED : "${{pathdfilled}}",
    REGULAR : "${{pathdregular}}"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   
   if (iconstyle != null)
    this.setIconStyle(iconstyle);
   else
    this.initIconStyle();
 }
});