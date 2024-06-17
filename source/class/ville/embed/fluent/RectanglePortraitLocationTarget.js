/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RectanglePortraitLocationTarget",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v6.27h-.02A1.5 1.5 0 0 0 15 9.09V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.78a4.5 4.5 0 0 0 .92 1H6a2 2 0 0 1-2-2V4Zm11.06 11.33a1 1 0 1 1-1.12-1.66 1 1 0 0 1 1.12 1.66ZM17.95 14h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 15 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 11.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 14 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 17.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z",
    FILLED : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h5.7a4.5 4.5 0 0 1-1.43-2.02 1.5 1.5 0 0 1 0-2.96 4.49 4.49 0 0 1 2.75-2.75 1.5 1.5 0 0 1 2.96 0H16V4a2 2 0 0 0-2-2H6Zm9.06 13.33a1 1 0 1 1-1.12-1.66 1 1 0 0 1 1.12 1.66ZM17.95 14h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 15 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 11.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 14 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 17.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z"
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