/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Trophy",
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

   var pathdregular = "M3 7a3 3 0 0 0 2.6 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.23.5.5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2v-1.5a4.5 4.5 0 0 0 3.9-3.5A3 3 0 0 0 17 7V5.5c0-.83-.68-1.5-1.5-1.5h-1a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2h-1C3.67 4 3 4.67 3 5.5V7Zm1.5-2h1v3.93A2 2 0 0 1 4 7V5.5c0-.28.22-.5.5-.5Zm10 0h1c.27 0 .5.22.5.5V7a2 2 0 0 1-1.5 1.94V5Zm-1-1v5a3.5 3.5 0 0 1-7 .16V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Zm-7 12.97a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1h-7Z";
   var pathdfilled = "M5.5 4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2h1c.82 0 1.5.67 1.5 1.5V7a3 3 0 0 1-2.6 2.97 4.5 4.5 0 0 1-3.9 3.5v1.5h2a2 2 0 0 1 2 2v.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-.5c0-1.1.9-2 2-2h2v-1.5a4.5 4.5 0 0 1-3.9-3.5A3 3 0 0 1 3 7V5.5C3 4.67 3.67 4 4.5 4h1Zm9 4.94A2 2 0 0 0 16 7V5.5a.5.5 0 0 0-.5-.5h-1v3.94ZM5.5 5h-1a.5.5 0 0 0-.5.5V7a2 2 0 0 0 1.5 1.93V5Z";
   
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