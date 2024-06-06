/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Wifi3",
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

   var pathdregular = "M12.89 11.85c.35.36.64.8.85 1.26a.5.5 0 1 1-.92.4 3.03 3.03 0 0 0-5.56-.01.5.5 0 0 1-.92-.4 4.03 4.03 0 0 1 6.54-1.24Zm-1.93 1.94a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z";
   var pathdfilled = "M12.95 11.84c.37.36.67.8.87 1.28a.75.75 0 0 1-1.37.6 2.63 2.63 0 0 0-4.82-.01.75.75 0 1 1-1.38-.6 4.13 4.13 0 0 1 6.7-1.27Zm-2.03 2.04a1.24 1.24 0 1 1-1.76 1.76 1.24 1.24 0 0 1 1.76-1.76Z";
   
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