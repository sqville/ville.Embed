/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FastAcceleration",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 4a6 6 0 1 1-3.3 11.01V15h-.02A6 6 0 0 1 11 4ZM5.25 14c.26.36.54.7.85 1H1.5a.5.5 0 0 0 0 1h5.9a7 7 0 1 0 0-12H2.5a.5.5 0 0 0 0 1h3.6a6.98 6.98 0 0 0-1.43 8H3.5a.5.5 0 0 0 0 1h1.75ZM8.2 7.9a3.48 3.48 0 0 0 0 4.2l1.08-1.08a2 2 0 0 1 0-2.04L8.2 7.9Zm.7-.7 1.08 1.08a2 2 0 0 1 2.04 0L13.1 7.2a3.48 3.48 0 0 0-4.2 0Zm4.9.7-1.08 1.08a2 2 0 0 1 0 2.04l1.08 1.08a3.48 3.48 0 0 0 0-4.2Zm-.7 4.9-1.08-1.08a2 2 0 0 1-2.04 0L8.9 12.8a3.48 3.48 0 0 0 4.2 0ZM6.5 10a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm3.5 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    FILLED : "M8.9 7.2a3.48 3.48 0 0 1 4.2 0l-1.08 1.08a2 2 0 0 0-2.04 0L8.9 7.2ZM13 10a2 2 0 0 0-.28-1.02L13.8 7.9a3.48 3.48 0 0 1 0 4.2l-1.08-1.08A2 2 0 0 0 13 10Zm-2 2a2 2 0 0 0 1.02-.28l1.08 1.08a3.48 3.48 0 0 1-4.2 0l1.08-1.08A2 2 0 0 0 11 12Zm-2-2c0 .37.1.72.28 1.02L8.2 12.1a3.48 3.48 0 0 1 0-4.2l1.08 1.08A2 2 0 0 0 9 10ZM6.1 5a6.98 6.98 0 0 0-1.43 8H3.5a.5.5 0 0 0 0 1h1.75c.26.36.54.7.85 1H1.5a.5.5 0 0 0 0 1h5.9a7 7 0 1 0 0-12H2.5a.5.5 0 0 0 0 1h3.6ZM11 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
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