/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrinkToGo",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.85 2.15c.2.2.2.5 0 .7L12.71 4h1.62c.31 0 .6.2.7.5l.92 2.5c.18.48-.18 1-.7 1h-.34l-1.43 8.34A2 2 0 0 1 11.51 18H8.5a2 2 0 0 1-1.97-1.66L5.09 8h-.34a.75.75 0 0 1-.7-1.01l.92-2.5c.1-.3.39-.49.7-.49h5.65a.5.5 0 0 1 .08-.1l1.75-1.75c.2-.2.5-.2.7 0ZM6.1 8l1.4 8.17a1 1 0 0 0 .99.83h3.02a1 1 0 0 0 .99-.83L13.9 8H6.1Zm-1-1h9.79l-.73-2H5.85L5.1 7Z",
    FILLED : "M13.85 2.15c.2.2.2.5 0 .7L12.71 4h1.62c.31 0 .6.2.7.5l.92 2.5c.18.48-.18 1-.7 1h-.34l-1.43 8.34A2 2 0 0 1 11.51 18H8.5a2 2 0 0 1-1.97-1.66L5.09 8h-.34a.75.75 0 0 1-.7-1.01l.92-2.5c.1-.3.39-.49.7-.49h5.65a.5.5 0 0 1 .08-.1l1.75-1.75c.2-.2.5-.2.7 0ZM5.11 7h9.78l-.73-2H5.85L5.1 7Z"
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