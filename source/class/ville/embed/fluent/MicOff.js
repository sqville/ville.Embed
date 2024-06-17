/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MicOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 5v4.88l.9.9A3 3 0 0 0 13 10V5a3 3 0 0 0-6-.12l1 1V5a2 2 0 1 1 4 0ZM7 7.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.63-3.62a5.48 5.48 0 0 1-3.02 1.25v2.02a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48.5.5 0 0 1 1 0 4.5 4.5 0 0 0 7.3 3.52l-1.06-1.07A3 3 0 0 1 7 10V7.7Zm4.02 4.02L8 8.71V10a2 2 0 0 0 3.02 1.72Zm3.78.96-.74-.74c.28-.59.44-1.25.44-1.94a.5.5 0 0 1 1 0c0 .97-.25 1.89-.7 2.68Z",
    FILLED : "M13 10a3 3 0 0 1-.1.78L7 4.88A3 3 0 0 1 13 5v5ZM7 7.7V10a3 3 0 0 0 4.74 2.45l1.07 1.07A4.5 4.5 0 0 1 5.5 10a.5.5 0 0 0-1.01 0 5.5 5.5 0 0 0 5 5.48v2.02a.5.5 0 0 0 1 0v-2.02a5.48 5.48 0 0 0 3.02-1.25l3.63 3.62a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L7 7.71Zm7.8 4.98c.45-.8.7-1.7.7-2.68a.5.5 0 0 0-1 0c0 .7-.16 1.35-.44 1.94l.74.74Z"
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