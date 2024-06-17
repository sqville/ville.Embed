/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PanelRightCursor",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M18 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h5v-1H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6.5v5c.36 0 .72.13 1 .38V4H15a2 2 0 0 1 2 2v7a2 2 0 0 1-.13.7l.75.75c.24-.43.38-.92.38-1.45V6Zm-6.14 4.15a.5.5 0 0 0-.86.35v8a.5.5 0 0 0 .9.3l2-2.65 3.5.78a.5.5 0 0 0 .45-.84l-6-5.94Z",
    FILLED : "M15 3a3 3 0 0 1 3 3v7c0 .53-.14 1.02-.38 1.45l-5.06-5.01A1.5 1.5 0 0 0 11.5 9V4H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h5v1H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10Zm-3.14 7.15a.5.5 0 0 0-.86.35v8a.5.5 0 0 0 .9.3l2-2.65 3.5.78a.5.5 0 0 0 .45-.84l-6-5.94Z"
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