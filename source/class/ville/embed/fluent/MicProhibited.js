/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MicProhibited",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 13h.2c.12-.4.27-.76.46-1.11A2 2 0 0 1 7 10V5a2 2 0 1 1 4 0v5c0 .1 0 .18-.02.27.31-.26.66-.48 1.02-.67V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm-4.5-3A4.5 4.5 0 0 0 9 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48.5.5 0 0 1 1 0Zm10 9a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-8a3.5 3.5 0 0 0-2.8 5.6l4.9-4.9a3.48 3.48 0 0 0-2.1-.7Zm-2.1 6.3a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Z",
    FILLED : "M9.2 13A5.51 5.51 0 0 1 12 9.6V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3.2 3Zm.3 4.5v-.7c-.32-.7-.5-1.48-.5-2.3A4.5 4.5 0 0 1 4.5 10a.5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.48v2.02a.5.5 0 0 0 1 0Zm5 1.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-8a3.5 3.5 0 0 0-2.8 5.6l4.9-4.9a3.48 3.48 0 0 0-2.1-.7Zm-2.1 6.3a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Z"
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