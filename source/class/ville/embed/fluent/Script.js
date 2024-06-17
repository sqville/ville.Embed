/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Script",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.56 2H6.5A2.5 2.5 0 0 0 4 4.5V13H2a1 1 0 0 0-1 1v1.69A2.32 2.32 0 0 0 3.38 18h9.14A2.5 2.5 0 0 0 15 15.53V7h3a1 1 0 0 0 1-1V4.5A2.5 2.5 0 0 0 16.56 2ZM6.5 3h8c-.3.39-.47.86-.5 1.38V15.5a1.5 1.5 0 0 1-3 0V14a1 1 0 0 0-1-1H5V4.5C5 3.67 5.67 3 6.5 3Zm10 0c.83 0 1.5.67 1.5 1.5V6h-3V4.5c0-.83.67-1.5 1.5-1.5ZM2 14h8v1.5c0 .56.19 1.08.5 1.5H3.37C2.6 17 2 16.42 2 15.69V14Z",
    FILLED : "M16.56 2H6.5A2.5 2.5 0 0 0 4 4.5V13h6a1 1 0 0 1 1 1v2.1c0 1.1.9 1.9 2 1.9s1.99-.79 2-1.88V4.37a2.5 2.5 0 0 1 2-2.32 2.5 2.5 0 0 0-.44-.05Zm-5.88 16a2.99 2.99 0 0 1-.68-1.9V14H1.5a.5.5 0 0 0-.5.5v1.19A2.32 2.32 0 0 0 3.38 18h7.3ZM18 7a1 1 0 0 0 1-1V4.5a1.5 1.5 0 0 0-3 0V7h2Z"
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