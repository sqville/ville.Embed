/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Box",
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

   var pathdregular = "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 0 0 2.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm4.13 4.35 6.5-2.6v7.58a.5.5 0 0 1-.31.47l-5.76 2.3c-.14.06-.28.1-.43.13V8.84Zm-1 0v7.88a2.5 2.5 0 0 1-.43-.13l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6Z";
   var pathdfilled = "m10 7.96 3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.26.1.53.17.8.21v-8.9L2.04 5.86Zm8.46 11.87c.27-.04.54-.1.8-.21l5.76-2.3c.57-.23.94-.78.94-1.4V6.18c0-.11-.01-.22-.04-.33L10.5 8.84v8.9ZM17.42 5l-3.04 1.22-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21Z";
   
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