/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneUpdateCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 16a1 1 0 0 0 1 1h2.6c.18.36.4.7.66 1H7a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v5.02a5.57 5.57 0 0 0-1 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12Zm3.5-3.8c.25-.54.6-1.04 1-1.47V7.2l1.15 1.14a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L9.5 7.21v5Zm9.5 2.3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    FILLED : "M5 16c0 1.1.9 2 2 2h3.26a5.48 5.48 0 0 1-.76-5.8v-5L8.35 8.36a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L10.5 7.21v3.52a5.48 5.48 0 0 1 4.5-1.7V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12Zm14-1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"
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