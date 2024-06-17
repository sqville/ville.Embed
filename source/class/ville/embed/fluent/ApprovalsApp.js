/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ApprovalsApp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.85 1.15a.5.5 0 1 0-.7.7L10.29 3H9.5a7.5 7.5 0 1 0 7.5 7.5.5.5 0 0 0-1 0A6.5 6.5 0 1 1 9.5 4h.8L9.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm3.5 5.99c.2.2.2.5.01.7l-3.85 4a.5.5 0 0 1-.72 0l-1.65-1.7a.5.5 0 0 1 .72-.7l1.29 1.34 3.49-3.63c.2-.2.5-.2.7-.01Z",
    FILLED : "M9.78.72a.75.75 0 0 0-1.06 1.06L9.94 3H9.5a7.5 7.5 0 1 0 7.5 7.5.75.75 0 0 0-1.5 0 6 6 0 1 1-6.06-6l-.72.72a.75.75 0 0 0 1.06 1.06l2.25-2.25c.3-.3.3-.77 0-1.06L9.78.72Zm3.74 6.24c.3.29.3.76.02 1.06l-3.85 4a.75.75 0 0 1-1.08 0l-1.65-1.71a.75.75 0 1 1 1.08-1.04l1.11 1.15 3.31-3.44c.29-.3.76-.3 1.06-.02Z"
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