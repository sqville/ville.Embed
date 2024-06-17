/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Dust",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.75 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 3a4 4 0 0 0-3.91 3.15 4 4 0 1 0 0 7.7A4 4 0 1 0 14.65 10 4 4 0 0 0 12 3ZM9 6.86a3 3 0 1 1 4.55 2.71.5.5 0 0 0 0 .86A3 3 0 1 1 9 13.14a.5.5 0 0 0-.71-.43 3 3 0 1 1 0-5.42.5.5 0 0 0 .71-.43ZM5.75 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    FILLED : "M5.75 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.34 2.65A4 4 0 1 1 14.65 10 4 4 0 0 1 12 17a4 4 0 0 1-3.9-3.15 4 4 0 1 1-.01-7.7ZM5.75 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
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