/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Rhombus",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.89 4.3A2 2 0 0 1 6.76 3H17a2 2 0 0 1 1.87 2.7l-3.76 10a2 2 0 0 1-1.87 1.3H3a2 2 0 0 1-1.87-2.7l3.76-10ZM6.76 4a1 1 0 0 0-.93.65l-3.76 10A1 1 0 0 0 3 16h10.24a1 1 0 0 0 .93-.65l3.76-10A1 1 0 0 0 17 4H6.76Z",
    FILLED : "M4.89 4.3A2 2 0 0 1 6.76 3H17a2 2 0 0 1 1.87 2.7l-3.76 10a2 2 0 0 1-1.87 1.3H3a2 2 0 0 1-1.87-2.7l3.76-10Z"
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