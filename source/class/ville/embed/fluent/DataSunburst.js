/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataSunburst",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.94 3.13a.5.5 0 0 1-.2.68A7.03 7.03 0 0 0 3.8 6.73a.5.5 0 1 1-.89-.46 8.03 8.03 0 0 1 3.35-3.35.5.5 0 0 1 .67.21Zm6.12 0a.5.5 0 0 1 .67-.2 8.03 8.03 0 0 1 3.35 3.34.5.5 0 0 1-.89.46 7.03 7.03 0 0 0-2.92-2.92.5.5 0 0 1-.21-.68Zm-9.93 9.93a.5.5 0 0 1 .68.2 7.03 7.03 0 0 0 2.92 2.93.5.5 0 1 1-.46.89 8.03 8.03 0 0 1-3.35-3.35.5.5 0 0 1 .21-.67Zm13.74 0a.5.5 0 0 1 .2.67 8.03 8.03 0 0 1-3.34 3.35.5.5 0 0 1-.46-.89 7.03 7.03 0 0 0 2.92-2.92.5.5 0 0 1 .68-.21ZM10 5.5c-.15 0-.3 0-.45.02a.5.5 0 0 1-.1-1L10 4.5a5.5 5.5 0 0 1 5.25 3.85.5.5 0 1 1-.96.3A4.5 4.5 0 0 0 10 5.5Zm-2.6.2a.5.5 0 0 1-.1.7 4.5 4.5 0 0 0-1.2 5.85.5.5 0 1 1-.86.5A5.48 5.48 0 0 1 6.7 5.6a.5.5 0 0 1 .7.1Zm7.52 5.32a.5.5 0 0 1 .33.63 5.5 5.5 0 0 1-8 3.11.5.5 0 1 1 .5-.86 4.5 4.5 0 0 0 6.54-2.55.5.5 0 0 1 .63-.33ZM8 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    FILLED : "M6.94 3.13a.5.5 0 0 1-.2.68A7.03 7.03 0 0 0 3.8 6.73a.5.5 0 1 1-.89-.46 8.03 8.03 0 0 1 3.35-3.35.5.5 0 0 1 .67.21Zm6.12 0a.5.5 0 0 1 .67-.2 8.03 8.03 0 0 1 3.35 3.34.5.5 0 0 1-.89.46 7.03 7.03 0 0 0-2.92-2.92.5.5 0 0 1-.21-.68Zm-9.93 9.93a.5.5 0 0 1 .68.2 7.03 7.03 0 0 0 2.92 2.93.5.5 0 1 1-.46.89 8.03 8.03 0 0 1-3.35-3.35.5.5 0 0 1 .21-.67Zm13.74 0a.5.5 0 0 1 .2.67 8.03 8.03 0 0 1-3.34 3.35.5.5 0 0 1-.46-.89 7.03 7.03 0 0 0 2.92-2.92.5.5 0 0 1 .68-.21ZM10 5.5c-.15 0-.3 0-.45.02a.5.5 0 0 1-.1-1L10 4.5a5.5 5.5 0 0 1 5.25 3.85.5.5 0 1 1-.96.3A4.5 4.5 0 0 0 10 5.5Zm-2.6.2a.5.5 0 0 1-.1.7 4.5 4.5 0 0 0-1.2 5.85.5.5 0 1 1-.86.5A5.48 5.48 0 0 1 6.7 5.6a.5.5 0 0 1 .7.1Zm7.52 5.32a.5.5 0 0 1 .33.63 5.5 5.5 0 0 1-8 3.11.5.5 0 1 1 .5-.86 4.5 4.5 0 0 0 6.54-2.55.5.5 0 0 1 .63-.33ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
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