/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Mailbox",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 2a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7v3H5.5A3.5 3.5 0 0 0 2 11.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.5A3.5 3.5 0 0 0 14.5 8H8V2.5a.5.5 0 0 0-.5-.5h-4ZM7 9v2.5a.5.5 0 0 0 1 0V9h4.05A3.49 3.49 0 0 0 11 11.5V17H3v-5.5A2.5 2.5 0 0 1 5.5 9H7Zm10 2.5V17h-5v-5.5a2.5 2.5 0 0 1 5 0Zm-3-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    FILLED : "M3 2.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V8h3.67A4.5 4.5 0 0 0 10 11.5V17c0 .36.1.7.27 1H3a1 1 0 0 1-1-1v-5.5A3.5 3.5 0 0 1 5.5 8H6v3.5a.5.5 0 0 0 1 0V5H3.5a.5.5 0 0 1-.5-.5v-2ZM14.5 8a3.5 3.5 0 0 0-3.5 3.5V17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5.5A3.5 3.5 0 0 0 14.5 8Zm-1.25 3.5c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5Z"
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