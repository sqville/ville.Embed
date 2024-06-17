/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlugDisconnected",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.85 2.15c.2.2.2.5 0 .7L16.2 4.52a4.04 4.04 0 0 1-.34 5.33l-.3.3-.3.31c-.42.41-1.08.41-1.5 0L9.55 6.24a1.05 1.05 0 0 1 0-1.48l.6-.61a4.04 4.04 0 0 1 5.34-.34l1.67-1.66c.2-.2.5-.2.7 0Zm-2.71 2.7a3.04 3.04 0 0 0-4.29 0l-.3.3c-.19.2-.19.5 0 .7l3.6 3.6c.2.19.5.19.7 0l.3-.3a3.04 3.04 0 0 0 0-4.29l-.01-.01Zm-5.79 3.8c.2.2.2.5 0 .7L7.71 11 9 12.3l1.65-1.65a.5.5 0 0 1 .7.7L9.71 13l.44.45c.59.58.59 1.52 0 2.1l-.3.3a4.04 4.04 0 0 1-5.33.34l-1.67 1.66a.5.5 0 0 1-.7-.7l1.66-1.67a4.04 4.04 0 0 1 .34-5.33l.3-.3a1.49 1.49 0 0 1 2.1 0l.45.44 1.65-1.64c.2-.2.5-.2.7 0Zm-4.5 6.5a3.04 3.04 0 0 0 4.3 0l.3-.3c.19-.2.19-.5 0-.7l-3.6-3.6c-.2-.19-.5-.19-.7 0l-.3.3a3.04 3.04 0 0 0 0 4.3Z",
    FILLED : "M17.78 2.22c.3.3.3.77 0 1.06l-1.45 1.45a4.04 4.04 0 0 1-.48 5.12l-.3.3-.3.31c-.42.41-1.08.41-1.5 0L9.55 6.24a1.05 1.05 0 0 1 0-1.48l.6-.61a4.05 4.05 0 0 1 5.13-.48l1.45-1.45c.3-.3.77-.3 1.06 0Zm-9 6.25c.3.3.3.77 0 1.06L7.51 10.8l1.69 1.7 1.27-1.28a.75.75 0 1 1 1.06 1.06l-1.28 1.28c.48.58.45 1.45-.1 2l-.3.3a4.04 4.04 0 0 1-5.12.47l-1.45 1.45a.75.75 0 0 1-1.06-1.06l1.45-1.45a4.04 4.04 0 0 1 .48-5.12l.3-.3a1.49 1.49 0 0 1 2-.1l1.27-1.28c.3-.3.77-.3 1.06 0Z"
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