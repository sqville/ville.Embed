/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlashlightOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L7 7.71v1.08l-4.3 4.3a2 2 0 0 0 0 2.82L4.1 17.3a2 2 0 0 0 2.82 0l4.3-4.29h1.08l4.86 4.85a.5.5 0 0 0 .7-.7l-15-15Zm12.67 9.13-1.06 1.06.65.65a.5.5 0 0 0 .24-.14l1.44-1.44a2 2 0 0 0 0-2.82L11.41 3.2a2 2 0 0 0-2.82 0L7.15 4.65a.5.5 0 0 0-.14.24l.65.65L9.3 3.91a1 1 0 0 1 1.42 0l5.38 5.38a1 1 0 0 1 0 1.42l-.57.57Zm-7.67 1.57a.5.5 0 1 0-.7-.7l-1 1a.5.5 0 1 0 .7.7l1-1ZM7.5 9.71l2.8 2.79-4.1 4.09a1 1 0 0 1-1.4 0L3.4 15.2a1 1 0 0 1 0-1.42L7.5 9.71Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l15 15a.5.5 0 0 0 .7-.7l-15-15ZM16.8 11.4l-1.08 1.09L7.5 4.3l1.09-1.1a2 2 0 0 1 2.82 0L16.8 8.6a2 2 0 0 1 0 2.82ZM6.8 9 11 13.2l-4.09 4.1a2 2 0 0 1-2.82 0L2.7 15.9a2 2 0 0 1 0-2.82L6.79 9Zm.06 4.85 1-1a.5.5 0 1 0-.7-.7l-1 1a.5.5 0 1 0 .7.7Z";
   
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