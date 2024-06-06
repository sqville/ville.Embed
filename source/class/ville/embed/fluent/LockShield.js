/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LockShield",
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

   var pathdregular = "M10 13v-.8c0-.45.19-.82.47-1.08A1 1 0 1 0 10 13Zm-4 4h4.58c.19.37.41.7.66 1H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 6 0v1h1a3 3 0 0 1 3 3v1.5a4.32 4.32 0 0 1-1-.65V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2Zm4-14a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2Zm4.88 7.16c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z";
   var pathdfilled = "M10 2a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h5.24A5.3 5.3 0 0 1 10 14.52V13a1 1 0 1 1 .47-1.88c.23-.22.52-.35.82-.4a3.98 3.98 0 0 0 2.1-1.25c.6-.63 1.62-.63 2.21 0 .34.35.83.78 1.4 1.04V9a3 3 0 0 0-3-3h-1V5a3 3 0 0 0-3-3ZM8 5a2 2 0 1 1 4 0v1H8V5Zm6.88 5.16c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z";
   
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