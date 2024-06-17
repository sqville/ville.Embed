/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ToggleMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-5 0A3.5 3.5 0 0 0 6.5 9h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 5.5ZM6.5 3h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5Zm7 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 14.5A3.5 3.5 0 0 0 6.5 18h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 14.5ZM6.5 12h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5Z",
    FILLED : "M3 5.5A3.5 3.5 0 0 1 6.5 2h7a3.5 3.5 0 1 1 0 7h-7A3.5 3.5 0 0 1 3 5.5Zm5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6.5 11a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7Zm7 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
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