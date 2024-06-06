/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GroupList",
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

   var pathdregular = "M2.5 3a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H3V4h1.5a.5.5 0 0 0 0-1h-2Zm0 8a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H3v-4h1.5a.5.5 0 0 0 0-1h-2ZM6 4.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 7.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM6 7.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 7.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z";
   var pathdfilled = "M2.75 2a.75.75 0 0 0-.75.75v6c0 .41.34.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V3.5h1.75a.75.75 0 0 0 0-1.5h-2.5Zm0 8.5a.75.75 0 0 0-.75.75v6c0 .41.34.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V12h1.75a.75.75 0 0 0 0-1.5h-2.5Zm5 1.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5ZM7 15.75c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75Zm0-11.5c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.25Zm.75 2.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Z";
   
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