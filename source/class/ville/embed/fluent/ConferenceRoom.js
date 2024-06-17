/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ConferenceRoom",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.49 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.6 2.01a.5.5 0 0 0-.6.5V17.5a.5.5 0 0 0 .6.5l7-1.51A.5.5 0 0 0 17 16V4a.5.5 0 0 0-.4-.49l-7-1.5Zm.4 14.87V3.12l6 1.29V15.6l-6 1.28ZM8 17v-1H4V4h4V3H3.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5H8Z",
    FILLED : "M9.19 2.11a.5.5 0 0 1 .41-.1l7 1.5c.23.05.4.25.4.5v12a.5.5 0 0 1-.4.48l-7 1.5a.5.5 0 0 1-.6-.49v-15c0-.15.07-.3.19-.39Zm3.31 7.9a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM8 3H3.5a.5.5 0 0 0-.5.5V16.5c0 .27.22.5.5.5H8V3Z"
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