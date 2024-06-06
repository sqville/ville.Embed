/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableSimple",
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

   var pathdregular = "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm1 5v4c0 .83.67 1.5 1.5 1.5h4v-5.5H4Zm5.5-1V4h-4C4.67 4 4 4.67 4 5.5v4h5.5Zm1 1V16h4c.83 0 1.5-.67 1.5-1.5v-4h-5.5Zm5.5-1v-4c0-.83-.67-1.5-1.5-1.5h-4v5.5H16Z";
   var pathdfilled = "M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.5V3h-4Zm4 7.5H3v4A2.5 2.5 0 0 0 5.5 17h4v-6.5Zm1 0H17v4a2.5 2.5 0 0 1-2.5 2.5h-4v-6.5Zm6.5-1v-4A2.5 2.5 0 0 0 14.5 3h-4v6.5H17Z";
   
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