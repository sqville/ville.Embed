/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ColorFill",
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

   var pathdregular = "M4.34 12H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-.56-1.39c-.08.4-.23.8-.47 1.16A1 1 0 0 1 17 14v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1.34l-1-1Zm10.04-2.83-.22.26c-.12.15-.29.38-.46.64-.31.5-.7 1.23-.7 1.93 0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 0 0-.46-.64l-.21-.25-.02-.02a.47.47 0 0 0-.36-.16.5.5 0 0 0-.37.17Zm.37 1.14.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 0 1-.5.25.62.62 0 0 1-.5-.25A1.21 1.21 0 0 1 14 12c0-.4.24-.92.55-1.4l.2-.3ZM8.5 1a.5.5 0 0 0-.5.5v1.56a2 2 0 0 0-.8.49L3.66 7.09a2 2 0 0 0 0 2.82l2.83 2.83a2 2 0 0 0 2.83 0l3.54-3.53a2 2 0 0 0 0-2.83l-2.83-2.83A2 2 0 0 0 9 3V1.5a.5.5 0 0 0-.5-.5ZM8 4.17V5.5a.5.5 0 0 0 1 0V4.04a1 1 0 0 1 .32.22l2.83 2.83a1 1 0 0 1 .25.41H4.66l3.25-3.24.09-.08ZM4.37 9.21a1 1 0 0 1-.3-.71h8.08l-3.54 3.54a1 1 0 0 1-1.41 0L4.37 9.2Zm10-.04Z";
   var pathdfilled = "M12 12c0 1.35.93 3 2.75 3 1.55 0 2.46-1.2 2.69-2.39A2 2 0 0 1 18 14v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h.34l1.45 1.45a3 3 0 0 0 4.24 0L11.48 12H12Zm2.38-2.83-.22.26c-.12.15-.29.38-.46.64-.31.5-.7 1.23-.7 1.93 0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 0 0-.46-.64l-.21-.25-.02-.02a.47.47 0 0 0-.36-.16.5.5 0 0 0-.37.17Zm.37 1.14.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 0 1-.5.25.62.62 0 0 1-.5-.25A1.21 1.21 0 0 1 14 12c0-.4.24-.92.55-1.4l.2-.3ZM8.5 1a.5.5 0 0 0-.5.5v1.56a2 2 0 0 0-.8.49L3.66 7.09a2 2 0 0 0 0 2.82l2.83 2.83a2 2 0 0 0 2.83 0l3.54-3.53a2 2 0 0 0 0-2.83l-2.83-2.83A2 2 0 0 0 9 3V1.5a.5.5 0 0 0-.5-.5ZM8 4.17V5.5a.5.5 0 0 0 1 0V4.04a1 1 0 0 1 .32.22l2.83 2.83a1 1 0 0 1 .25.41H4.66l3.25-3.24.09-.08ZM4.37 9.21a1 1 0 0 1-.3-.71h8.08l-3.54 3.54a1 1 0 0 1-1.41 0L4.37 9.2Zm10-.04Z";
   
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