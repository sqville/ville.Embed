/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Braces",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.5 3A2.5 2.5 0 0 0 4 5.5v2.88c0 .5-.28.95-.72 1.17a.5.5 0 0 0 0 .9c.44.22.72.68.72 1.17v2.88A2.5 2.5 0 0 0 6.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 5 14.5v-2.88c0-.62-.24-1.2-.66-1.62.42-.42.66-1 .66-1.62V5.5C5 4.67 5.67 4 6.5 4a.5.5 0 0 0 0-1Zm7 0A2.5 2.5 0 0 1 16 5.5v2.88c0 .5.28.95.72 1.17a.5.5 0 0 1 0 .9 1.3 1.3 0 0 0-.72 1.17v2.88a2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 1 0-1c.83 0 1.5-.67 1.5-1.5v-2.88c0-.62.24-1.2.66-1.62A2.3 2.3 0 0 1 15 8.38V5.5c0-.83-.67-1.5-1.5-1.5a.5.5 0 0 1 0-1Z",
    FILLED : "M3.5 5.75A2.75 2.75 0 0 1 6.23 3a.75.75 0 0 1 0 1.5C5.55 4.5 5 5.06 5 5.75L5 8.38c0 .6-.21 1.17-.58 1.62.37.45.58 1.02.58 1.62v2.63c0 .7.56 1.25 1.25 1.25a.75.75 0 1 1 0 1.5 2.75 2.75 0 0 1-2.75-2.75v-2.63c0-.4-.22-.76-.57-.94a.75.75 0 0 1 0-1.36c.35-.18.57-.54.57-.94V5.75Zm13 0A2.75 2.75 0 0 0 13.77 3a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25L15 8.38c0 .6.21 1.17.58 1.62a2.56 2.56 0 0 0-.58 1.62v2.63c0 .7-.56 1.25-1.25 1.25a.75.75 0 1 0 0 1.5 2.75 2.75 0 0 0 2.75-2.75v-2.63c0-.4.22-.76.57-.94a.75.75 0 0 0 0-1.36 1.06 1.06 0 0 1-.57-.94V5.75Z"
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