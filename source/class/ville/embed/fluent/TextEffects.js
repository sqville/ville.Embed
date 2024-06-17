/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextEffects",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.62 4.1a1.75 1.75 0 0 0-3.24 0l-3.02 7.46-.03.07-1.2 2.96a1.75 1.75 0 0 0 3.24 1.32L8.14 14h3.72l.77 1.9a1.75 1.75 0 0 0 3.24-1.3l-1.2-2.97a1.73 1.73 0 0 0-.03-.07l-3.02-7.47Zm-1.18 6.4L10 9.41l-.44 1.09h.88Zm.26-6.03 3.03 7.48v.03l1.22 2.99a.75.75 0 0 1-1.4.56L12.54 13H7.47l-1.02 2.53a.75.75 0 0 1-1.4-.56l1.21-2.99.02-.03L9.3 4.47a.75.75 0 0 1 1.39 0Zm1.22 7.03H8.08L10 6.75l1.92 4.75Z",
    FILLED : "M12.09 3.9a2.25 2.25 0 0 0-4.18 0L4.9 11.37a2.2 2.2 0 0 0-.04.1l-1.2 2.95a2.25 2.25 0 0 0 4.18 1.68l.64-1.59h3.04l.64 1.6a2.25 2.25 0 1 0 4.18-1.7l-1.2-2.95a2.27 2.27 0 0 0-.04-.1L12.1 3.92Zm-1.4.57 3.04 7.48v.03l1.22 2.99a.75.75 0 0 1-1.4.56L12.54 13H7.47l-1.02 2.53a.75.75 0 0 1-1.4-.56l1.21-2.99.02-.03L9.3 4.47a.75.75 0 0 1 1.39 0Zm1.23 7.03H8.08L10 6.75l1.92 4.75Z"
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