/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowAutofitHeightIn",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m14.85 7.85 2-2a.5.5 0 0 0-.7-.7L15 6.29V2.5a.5.5 0 0 0-1 0v3.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0ZM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.85 9.15-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L14 13.71v3.79a.5.5 0 0 0 1 0v-3.8l1.15 1.15a.5.5 0 0 0 .7-.7Z",
    FILLED : "m14.78 7.78 2-2a.75.75 0 0 0-1.06-1.06l-.72.72V2.75a.75.75 0 0 0-1.5 0v2.69l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2c.3.3.77.3 1.06 0ZM3 5c0-1.1.9-2 2-2h4.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h4.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V5Zm13.78 9.22-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v2.69a.75.75 0 0 0 1.5 0v-2.69l.72.72a.75.75 0 1 0 1.06-1.06Z"
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