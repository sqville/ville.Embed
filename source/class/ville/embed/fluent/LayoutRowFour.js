/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LayoutRowFour",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6Zm-3-2a2 2 0 0 1 2 2H4c0-1.1.9-2 2-2h8ZM4 10.5h12V13H4v-2.5Zm0-1V7h12v2.5H4ZM6 16a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2H6Z",
    FILLED : "M3 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3H3Zm14-1v-2.5H3V13h14Zm0-6v2.5H3V7h14Zm0-1a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3h14Z"
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});