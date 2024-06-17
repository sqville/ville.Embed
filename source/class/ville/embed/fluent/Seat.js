/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Seat",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v9c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6a3 3 0 0 0-3-3H6Zm10 6.5a2.49 2.49 0 0 0-3.62.67 3 3 0 0 0-4.76 0A2.5 2.5 0 0 0 4 9.5V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.5ZM12 12v4H8v-4a2 2 0 1 1 4 0Zm1 4v-4.5a1.5 1.5 0 0 1 3 0V15a1 1 0 0 1-1 1h-2Zm-9-1v-3.5a1.5 1.5 0 0 1 3 0V16H5a1 1 0 0 1-1-1Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.76a2.99 2.99 0 0 0-4.5.58 3 3 0 0 0-5 0A3 3 0 0 0 3 9.76V6Zm9 6a2 2 0 1 0-4 0v5h4v-5Zm1 5h2a2 2 0 0 0 2-2v-3a2 2 0 1 0-4 0v5Zm-6 0H5a2 2 0 0 1-2-2v-3a2 2 0 1 1 4 0v5Z"
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