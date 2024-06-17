/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Connector",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 3.5a.5.5 0 0 0-1 0v2.8L2.15 8.14A.5.5 0 0 0 2 8.5v5c0 .28.22.5.5.5H4v2.5a.5.5 0 0 0 1 0V14h1v2.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.15-.35L7 6.29V3.5a.5.5 0 0 0-1 0v3c0 .13.05.26.15.35L8 8.71V13H3V8.7l1.85-1.85A.5.5 0 0 0 5 6.5v-3Zm10 13v-3a.5.5 0 0 1 .15-.35L17 11.29V7h-5v4.3l1.85 1.85c.1.09.15.22.15.35v3a.5.5 0 0 1-1 0v-2.8l-1.85-1.85a.5.5 0 0 1-.15-.35v-5c0-.28.22-.5.5-.5h.5V3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V6h.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.15.35L16 13.71v2.79a.5.5 0 0 1-1 0ZM13 6h3V4h-3v2Z",
    FILLED : "M4.5 3a.5.5 0 0 0-.5.5v2.8L2.15 8.14A.5.5 0 0 0 2 8.5v5c0 .28.22.5.5.5H4v2.5a.5.5 0 0 0 1 0V14h1v2.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.15-.35L7 6.29V3.5a.5.5 0 0 0-.5-.5h-2Zm11 14a.5.5 0 0 0 .5-.5v-2.8l1.85-1.85a.5.5 0 0 0 .15-.35v-5a.5.5 0 0 0-.5-.5H17V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V6h-.5a.5.5 0 0 0-.5.5v5c0 .13.05.26.15.35L13 13.71v2.79c0 .28.22.5.5.5h2ZM13 6V4h3v2h-3Z"
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