/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DismissSquareMultiple",
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

   var pathdregular = "M3 5.5A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 3 12.5v-7ZM5.5 4C4.67 4 4 4.67 4 5.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7Zm2 13a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-7c.6.46 1 1.18 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-5ZM6.85 6.15a.5.5 0 1 0-.7.7L8.29 9l-2.14 2.15a.5.5 0 0 0 .7.7L9 9.71l2.15 2.14a.5.5 0 0 0 .7-.7L9.71 9l2.14-2.15a.5.5 0 0 0-.7-.7L9 8.29 6.85 6.15Z";
   var pathdfilled = "M3 5.5A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 3 12.5v-7Zm3.15.65a.5.5 0 0 0 0 .7L8.29 9l-2.14 2.15a.5.5 0 0 0 .7.7L9 9.71l2.15 2.14a.5.5 0 0 0 .7-.7L9.71 9l2.14-2.15a.5.5 0 0 0-.7-.7L9 8.29 6.85 6.15a.5.5 0 0 0-.7 0ZM5.5 16c.46.6 1.18 1 2 1h5a4.5 4.5 0 0 0 4.5-4.5v-5c0-.82-.4-1.54-1-2v7a3.5 3.5 0 0 1-3.5 3.5h-7Z";
   
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