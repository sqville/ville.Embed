/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextHeader1Lines",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 2.5a.5.5 0 1 0-1 0v6a.5.5 0 0 0 1 0V6h3v2.5a.5.5 0 0 0 1 0v-6a.5.5 0 1 0-1 0V5H3V2.5ZM10.61 2a.5.5 0 0 1 .39.49v6a.5.5 0 0 1-1 0V3.91a4.57 4.57 0 0 1-.76.53h-.01a.5.5 0 0 1-.45-.89 1.25 1.25 0 0 0 .12-.07 3.5 3.5 0 0 0 .86-.75c.11-.14.21-.29.3-.45A.5.5 0 0 1 10.6 2ZM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5-4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    FILLED : "M10 8.25c0 .41.34.75.75.75s.75-.34.75-.75v-5.5a.75.75 0 0 0-.58-.73.73.73 0 0 0-.84.39 2.96 2.96 0 0 1-1.17 1.17.74.74 0 0 0-.33 1c.19.38.64.53 1.01.34.04-.02.2-.1.41-.25v3.58ZM2.75 2c.41 0 .75.34.75.75v2h2v-2a.75.75 0 1 1 1.5 0v5.5a.75.75 0 0 1-1.5 0v-2h-2v2a.75.75 0 0 1-1.5 0v-5.5c0-.41.34-.75.75-.75ZM2 16.25c0-.42.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"
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