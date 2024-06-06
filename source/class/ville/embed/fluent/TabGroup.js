/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabGroup",
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

   var pathdregular = "M1 6.5A2.5 2.5 0 0 1 3.5 4h11A2.5 2.5 0 0 1 17 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 1 11.5v-5ZM3.5 5C2.67 5 2 5.67 2 6.5v5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-11Zm2 11a2.5 2.5 0 0 1-2-1h11a3.5 3.5 0 0 0 3.5-3.5v-5c.61.46 1 1.18 1 2v3a4.5 4.5 0 0 1-4.5 4.5h-9Zm0-7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z";
   var pathdfilled = "M3.5 4A2.5 2.5 0 0 0 1 6.5v5A2.5 2.5 0 0 0 3.5 14h11a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 4h-11ZM5 9c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 9Zm-1.5 6c.46.6 1.19 1 2 1h9a4.5 4.5 0 0 0 4.5-4.5v-3c0-.82-.39-1.54-1-2v5a3.5 3.5 0 0 1-3.5 3.5h-11Z";
   
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