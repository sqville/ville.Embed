/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Stream",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2V9Zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4Zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1c0-1.1.9-2 2-2h3.5a.5.5 0 0 1 0 1H14Z",
    FILLED : "M7.5 9.25a5.75 5.75 0 0 1 5.75-5.75h.5a.75.75 0 0 0 0-1.5h-.5C9.25 2 6 5.25 6 9.25v1c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 0 0 1.5h2.5c1.24 0 2.25-1 2.25-2.25v-1Zm6.25-3A3.25 3.25 0 0 0 10.5 9.5v1a4.75 4.75 0 0 1-4.75 4.75h-3a.75.75 0 0 1 0-1.5h3c1.8 0 3.25-1.46 3.25-3.25v-1a4.75 4.75 0 0 1 4.75-4.75h3.5a.75.75 0 0 1 0 1.5h-3.5Zm.5 2.75a.75.75 0 0 0-.75.75v1c0 4-3.25 7.25-7.25 7.25h-.5a.75.75 0 0 1 0-1.5h.5A5.75 5.75 0 0 0 12 10.75v-1c0-1.24 1-2.25 2.25-2.25h3a.75.75 0 0 1 0 1.5h-3Z"
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