/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideLayout",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M5.5 14A1.5 1.5 0 0 1 4 12.5v-5C4 6.67 4.67 6 5.5 6h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9Zm0-7a.5.5 0 0 0-.5.5V9h10V7.5a.5.5 0 0 0-.5-.5h-9ZM7 10H5v2.5c0 .28.22.5.5.5H7v-3Zm1 3h6.5a.5.5 0 0 0 .5-.5V10H8v3ZM2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-7ZM4.5 5C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11Z";
   var pathdfilled = "M5.5 7h9c.28 0 .5.22.5.5V9H5V7.5c0-.28.22-.5.5-.5ZM7 10v3H5.5a.5.5 0 0 1-.5-.5V10h2Zm7.5 3H8v-3h7v2.5a.5.5 0 0 1-.5.5Zm-10-9A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11Zm10 10h-9A1.5 1.5 0 0 1 4 12.5v-5C4 6.67 4.67 6 5.5 6h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});