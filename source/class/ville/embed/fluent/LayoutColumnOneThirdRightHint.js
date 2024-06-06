/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LayoutColumnOneThirdRightHint",
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

   var pathdregular = "M5.5 3A2.5 2.5 0 0 0 3 5.5a.5.5 0 0 0 1 0C4 4.67 4.67 4 5.5 4a.5.5 0 0 0 0-1Zm3 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM4 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm0 6a.5.5 0 0 0-1 0A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5ZM8.5 16a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4-13a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-1.5Zm.5 13V4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1Z";
   var pathdfilled = "M3 5.5A2.5 2.5 0 0 1 5.5 3a.5.5 0 0 1 0 1C4.67 4 4 4.67 4 5.5a.5.5 0 0 1-1 0Zm5-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM3.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5Zm0 6c.28 0 .5.22.5.5 0 .83.67 1.5 1.5 1.5a.5.5 0 0 1 0 1A2.5 2.5 0 0 1 3 14.5c0-.28.22-.5.5-.5ZM8 16.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4-13c0-.28.22-.5.5-.5H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1.5a.5.5 0 0 1-.5-.5v-13Z";
   
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