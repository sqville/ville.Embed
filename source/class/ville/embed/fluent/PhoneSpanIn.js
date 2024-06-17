/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneSpanIn",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v3.09a1.5 1.5 0 0 0-1 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.09a1.5 1.5 0 0 0-1 0V4Zm0 9.91V16c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-2.09a1.5 1.5 0 0 1-1 0V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.09a1.5 1.5 0 0 1-1 0Zm2.85-3.06-2 2a.5.5 0 0 1-.7-.7L6.29 11H3.5a.5.5 0 0 1 0-1h2.8L5.14 8.85a.5.5 0 1 1 .7-.7l2 2a.5.5 0 0 1 .15.35.5.5 0 0 1-.14.35Zm6.3-2.7-2 2a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 11h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7Z",
    FILLED : "M7 2a2 2 0 0 0-2 2v3.09a1.5 1.5 0 0 1 1.56.35l2 2a1.5 1.5 0 0 1 0 2.12l-2 2a1.5 1.5 0 0 1-1.56.35V16c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-2.09a1.5 1.5 0 0 1-1.56-.35l-2-2a1.5 1.5 0 0 1 0-2.12l2-2A1.5 1.5 0 0 1 15 7.09V4a2 2 0 0 0-2-2H7Zm7.85 6.15c.2.2.2.5 0 .7L13.71 10h2.79a.5.5 0 0 1 0 1h-2.8l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2c.2-.2.5-.2.7 0Zm-9.7.7a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L6.29 11H3.5a.5.5 0 0 1 0-1h2.8L5.14 8.85Z"
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