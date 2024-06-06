/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowMaximize",
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

   var pathdregular = "M10.5 3h6.04l.09.02.06.02.08.04.05.04.06.06.03.04.04.07.03.08.02.08V9.5a.5.5 0 0 1-1 .09V4.7L4.7 16h4.8a.5.5 0 0 1 .5.41v.09a.5.5 0 0 1-.41.5H3.41l-.1-.04-.08-.04-.05-.04-.06-.06-.03-.04-.04-.07-.03-.08v-.02A.5.5 0 0 1 3 16.5v.07-6.07a.5.5 0 0 1 1-.09v4.89L15.3 4h-4.8a.5.5 0 0 1-.5-.41V3.5c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M16 3a1 1 0 0 1 1 1v5.25a.75.75 0 0 1-1.5 0v-3.7L5.56 15.5h3.69a.75.75 0 0 1 0 1.5H4a1 1 0 0 1-1-1v-5.25a.75.75 0 0 1 1.5 0v3.69l9.94-9.94h-3.69a.75.75 0 0 1 0-1.5H16Z";
   
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