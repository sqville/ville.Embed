/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MicRecord",
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

   var pathdregular = "M9 13h.2c.12-.4.27-.76.46-1.11A2 2 0 0 1 7 10V5a2 2 0 1 1 4 0v5c0 .1 0 .18-.02.27.31-.26.66-.48 1.02-.67V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm-4.5-3A4.5 4.5 0 0 0 9 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48.5.5 0 0 1 1 0ZM17 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-8 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z";
   var pathdfilled = "M4.5 10a.5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.48v2.02a.5.5 0 0 0 1 0v-.7c-.32-.7-.5-1.48-.5-2.3A4.5 4.5 0 0 1 4.5 10ZM12 5v4.6A5.51 5.51 0 0 0 9.2 13 3.02 3.02 0 0 1 6 10V5a3 3 0 0 1 6 0Zm5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-8 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z";
   
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