/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowMultipleSwap",
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

   var pathdregular = "M2 4.5A2.5 2.5 0 0 1 4.5 2h8A2.5 2.5 0 0 1 15 4.5v8a2.5 2.5 0 0 1-2.5 2.5h-1.59a1.5 1.5 0 0 0 0-1h1.59c.83 0 1.5-.67 1.5-1.5V6H3v5.09c-.2.07-.4.19-.56.35l-.44.44V4.5Zm1 0V5h11v-.5c0-.83-.67-1.5-1.5-1.5h-8C3.67 3 3 3.67 3 4.5ZM14 18H7.5c.38 0 .77-.15 1.06-.44l.56-.56H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4Zm-4.15-3.15-2 2a.5.5 0 0 1-.7-.7L8.29 15H2.71l1.14 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L2.71 14H8.3l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7ZM3.25 14h1.32";
   var pathdfilled = "M2 4.5A2.5 2.5 0 0 1 4.5 2h8A2.5 2.5 0 0 1 15 4.5v8a2.5 2.5 0 0 1-2.5 2.5h-1.59a1.5 1.5 0 0 0 0-1h1.59c.83 0 1.5-.67 1.5-1.5V6H3v5.09c-.2.07-.4.19-.56.35l-.44.44V4.5ZM14 18H7.5c.38 0 .77-.15 1.06-.44l.56-.56H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4Zm-4.15-3.15-2 2a.5.5 0 0 1-.7-.7L8.29 15H2.71l1.14 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L2.71 14H8.3l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7ZM3.25 14h1.32";
   
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