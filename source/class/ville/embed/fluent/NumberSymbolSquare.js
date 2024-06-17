/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberSymbolSquare",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.1 6.01a.5.5 0 0 1 .39.6L9.19 8h2.48L12 6.4a.5.5 0 0 1 .98.2l-.3 1.4h.81a.5.5 0 0 1 0 1h-1.02l-.43 2H13a.5.5 0 0 1 0 1h-1.17l-.34 1.6a.5.5 0 1 1-.98-.2l.3-1.4H8.33L8 13.6a.5.5 0 1 1-.98-.2l.3-1.4H6.5a.5.5 0 0 1 0-1h1.02l.43-2H7a.5.5 0 0 1 0-1h1.17l.34-1.6a.5.5 0 0 1 .6-.39ZM8.55 11h2.47l.43-2H8.98l-.43 2ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9Z",
    FILLED : "m11.45 9-.43 2H8.55l.43-2h2.47ZM5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9Zm3.6 3.01a.5.5 0 0 1 .39.6L9.19 8h2.48L12 6.4a.5.5 0 0 1 .98.2l-.3 1.4h.81a.5.5 0 0 1 0 1h-1.02l-.43 2H13a.5.5 0 0 1 0 1h-1.17l-.34 1.6a.5.5 0 1 1-.98-.2l.3-1.4H8.33L8 13.6a.5.5 0 1 1-.98-.2l.3-1.4H6.5a.5.5 0 0 1 0-1h1.02l.43-2H7a.5.5 0 0 1 0-1h1.17l.34-1.6a.5.5 0 0 1 .6-.39Z"
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