/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowHeaderHorizontalOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L3.4 4.12C3.15 4.52 3 5 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.5 0 .98-.15 1.38-.41l1.27 1.26a.5.5 0 0 0 .7-.7l-15-15Zm12.3 13.7c-.2.1-.42.15-.65.15h-9A1.5 1.5 0 0 1 4 14.5V7h2.3l8.85 8.85ZM16 7v6.88l.98.97.02-.35v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.24 0-.35.02L9.12 7H16Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L3.4 4.12C3.15 4.52 3 5 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.5 0 .98-.15 1.38-.41l1.27 1.26a.5.5 0 0 0 .7-.7l-15-15Zm11.9 13.32a1 1 0 0 1-.25.03h-9a1 1 0 0 1-1-1V7h1.8l8.46 8.47ZM15.5 7v6.38l1.48 1.47.02-.35v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.24 0-.35.02L9.12 7h6.38Z"
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