/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowLocationTarget",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3h8a3 3 0 0 1 3 3v4.76c-.3-.2-.64-.38-1-.5V7H4v7c0 1.1.9 2 2 2h4.26c.12.36.3.7.5 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3ZM4 6h12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm11.06 9.33a1 1 0 1 1-1.12-1.66 1 1 0 0 1 1.12 1.66ZM17.95 14h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 15 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 11.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 14 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 17.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4.76c-.3-.2-.64-.38-1-.5V7H4v7c0 1.1.9 2 2 2h4.26c.12.36.3.7.5 1H6a3 3 0 0 1-3-3V6Zm12.06 9.33a1 1 0 1 1-1.12-1.66 1 1 0 0 1 1.12 1.66ZM17.95 14h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 15 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 11.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 14 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 17.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z"
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