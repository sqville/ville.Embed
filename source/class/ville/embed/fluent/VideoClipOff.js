/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoClipOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7l.73.74A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 0 0 .7-.7l-15-15ZM15.3 16H4.5A1.5 1.5 0 0 1 3 14.5v-9c0-.49.23-.92.6-1.2L8 8.7v3.95a.5.5 0 0 0 .78.42l2.15-1.43L15.3 16ZM9.92 7.8l2.71 2.71.15-.1a.5.5 0 0 0-.01-.83L9.92 7.8ZM17 14.5c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-9A2.5 2.5 0 0 0 15.5 3H5.12l1 1h9.38c.83 0 1.5.67 1.5 1.5v9Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l.73.74A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 0 0 .7-.7l-15-15Zm8.08 9.49-2.15 1.43a.5.5 0 0 1-.78-.42V8.71l2.93 2.93Zm1.85-1.22-.15.1 5.1 5.1c.18-.34.27-.72.27-1.12v-9A2.5 2.5 0 0 0 15.5 3H5.12l4.8 4.8 2.85 1.78a.5.5 0 0 1 0 .84Z";
   
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