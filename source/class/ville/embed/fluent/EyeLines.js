/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EyeLines",
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

   var pathdregular = "M10 3c-1.53 0-2.8.4-3.82 1H10a6.5 6.5 0 0 1 5.3 2.62 8.73 8.73 0 0 1 1.38 2.62c.05.14.06.22.07.25v.01a6.5 6.5 0 0 1-.32.94c-.24.57-.6 1.26-1.14 1.94A6.5 6.5 0 0 1 10 15H6.18c1.03.6 2.29 1 3.82 1a7.44 7.44 0 0 0 6.08-3 9.74 9.74 0 0 0 1.56-2.96c.06-.2.11-.4.11-.54s-.05-.35-.1-.54A9.73 9.73 0 0 0 16.08 6 7.44 7.44 0 0 0 10 3Zm0 3H3.92c.27-.34.57-.68.92-1H10v1Zm0 7a3.5 3.5 0 1 0 0-7v1H3.24c-.21.35-.38.7-.52 1H8a2.5 2.5 0 1 1 0 3H2.72c.14.3.3.65.52 1H10v1Zm0 0H3.92c.27.34.57.68.92 1H10v-1ZM7.55 9h-5.2c-.06.18-.1.37-.1.5s.04.32.1.5h5.2a2.51 2.51 0 0 1 0-1Z";
   var pathdfilled = "M10 6H3.92c.27-.34.57-.68.92-1H10V4H6.18C7.21 3.4 8.47 3 10 3a7.5 7.5 0 0 1 6.08 3 9.73 9.73 0 0 1 1.56 2.96c.06.2.11.4.11.54s-.05.35-.1.54A9.74 9.74 0 0 1 16.08 13 7.5 7.5 0 0 1 10 16c-1.53 0-2.8-.4-3.82-1H10v-1H4.84a8.59 8.59 0 0 1-.92-1H10v-.5a3 3 0 1 0 0-6V6ZM8.34 7h-5.1c-.21.35-.38.7-.52 1H7.4c.23-.4.56-.74.94-1Zm-1.3 2h-4.7c-.05.18-.09.37-.09.5s.04.32.1.5h4.7a3.02 3.02 0 0 1 0-1Zm.36 2H2.72c.14.3.3.65.52 1h5.1c-.38-.26-.7-.6-.94-1Z";
   
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