/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlugConnected",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.85 2.85a.5.5 0 0 0-.7-.7L14.48 4.8a4.04 4.04 0 0 0-5.33.34l-.3.3a1.49 1.49 0 0 0 0 2.1l3.6 3.6c.58.59 1.52.59 2.1 0l.3-.3a4.04 4.04 0 0 0 .34-5.33l2.66-2.67Zm-4 7.6c-.2.19-.5.19-.7 0l-3.6-3.6c-.19-.2-.19-.5 0-.7l.3-.3a3.04 3.04 0 0 1 4.3 4.3l-.3.3Zm-6.3-1.6a1.49 1.49 0 0 0-2.1 0l-.3.3a4.04 4.04 0 0 0-.34 5.33l-2.66 2.67a.5.5 0 0 0 .7.7l2.67-2.66a4.04 4.04 0 0 0 5.33-.34l.3-.3c.59-.58.59-1.52 0-2.1l-3.6-3.6Zm-1.4.7c.2-.19.5-.19.7 0l3.6 3.6c.19.2.19.5 0 .7l-.3.3a3.04 3.04 0 1 1-4.3-4.3l.3-.3Z",
    FILLED : "M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.45 2.45a4.04 4.04 0 0 0-5.12.48l-.3.3a1.49 1.49 0 0 0 0 2.1l3.6 3.6c.58.59 1.52.59 2.1 0l.3-.3a4.04 4.04 0 0 0 .48-5.12l2.45-2.45ZM7.55 8.85a1.49 1.49 0 0 0-2.1 0l-.3.3a4.04 4.04 0 0 0-.48 5.12l-2.45 2.45a.75.75 0 1 0 1.06 1.06l2.45-2.45a4.04 4.04 0 0 0 5.12-.48l.3-.3c.59-.58.59-1.52 0-2.1l-3.6-3.6Z"
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