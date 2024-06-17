/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageCircle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a7 7 0 0 0-5.29 11.59l4.24-4.17a1.5 1.5 0 0 1 2.1 0l4.24 4.17A7 7 0 0 0 10 3Zm0 14c1.75 0 3.35-.64 4.58-1.7l-4.23-4.17a.5.5 0 0 0-.7 0L5.42 15.3A6.97 6.97 0 0 0 10 17Zm-8-7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm11-2.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    FILLED : "M18 10c0 2.03-.75 3.88-2 5.29l-4.95-4.87a1.5 1.5 0 0 0-2.1 0L4 15.29A8 8 0 1 1 18 10Zm-7.65 1.13L15.3 16a7.97 7.97 0 0 1-10.58 0l4.94-4.87c.2-.19.5-.19.7 0Zm2.4-2.63a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
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