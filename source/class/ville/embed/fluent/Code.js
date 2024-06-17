/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Code",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.97 3.68a.5.5 0 0 0-.94-.36l-5 13a.5.5 0 1 0 .94.36l5-13ZM5.83 6.12c.2.18.23.5.05.7L3.16 10l2.72 3.17a.5.5 0 0 1-.76.66l-3-3.5a.5.5 0 0 1 0-.66l3-3.5a.5.5 0 0 1 .7-.05Zm8.34 8.26a.5.5 0 0 1-.05-.7l2.72-3.18-2.72-3.17a.5.5 0 1 1 .76-.66l3 3.5a.5.5 0 0 1 0 .66l-3 3.5a.5.5 0 0 1-.7.05Z",
    FILLED : "M12.94 4.05a.75.75 0 0 0-1.38-.6l-5.5 12.5a.75.75 0 1 0 1.38.6l5.5-12.5Zm1.35 9.8a.75.75 0 0 1-.13-1.06L16.3 10l-2.14-2.8a.75.75 0 0 1 1.18-.9l2.5 3.24c.21.27.21.65 0 .92l-2.5 3.25a.75.75 0 0 1-1.05.13Zm-8.58-7.7c.33.26.39.73.13 1.06L3.7 10l2.14 2.8a.75.75 0 1 1-1.18.9l-2.5-3.24a.75.75 0 0 1 0-.92l2.5-3.25a.75.75 0 0 1 1.05-.13Z"
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