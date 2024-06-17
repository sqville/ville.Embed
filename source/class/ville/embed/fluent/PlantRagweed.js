/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlantRagweed",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a2.5 2.5 0 0 0-2.44 3.05 2 2 0 0 0-.88 3.45A2 2 0 0 0 8 12h1.5v4.3l-3.15-3.15a.5.5 0 0 0-.7.7l3.85 3.86v.79a.5.5 0 0 0 1 0v-.8l3.85-3.85a.5.5 0 0 0-.7-.7l-3.15 3.14V12H12a2 2 0 0 0 1.32-3.5 2 2 0 0 0-.88-3.45A2.5 2.5 0 0 0 10 2Zm2 9H8a1 1 0 1 1 0-2 .5.5 0 0 0 0-1 1 1 0 0 1 0-2h.27a.5.5 0 0 0 .43-.75 1.5 1.5 0 1 1 2.6 0 .5.5 0 0 0 .43.75H12a1 1 0 1 1 0 2 .5.5 0 0 0 0 1 1 1 0 1 1 0 2Z",
    FILLED : "M7.5 4.5a2.5 2.5 0 1 1 4.94.55 2 2 0 0 1 .88 3.45A2 2 0 0 1 12 12h-1.5v4.3l3.15-3.15a.5.5 0 0 1 .7.7l-3.85 3.86v.79a.5.5 0 0 1-1 0v-.8l-3.85-3.85a.5.5 0 0 1 .7-.7l3.15 3.14V12H8a2 2 0 0 1-1.32-3.5 2 2 0 0 1 .88-3.45 2.5 2.5 0 0 1-.06-.55Z"
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