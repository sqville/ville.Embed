/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Pi",
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

   var pathdregular = "M3.18 4.67a2 2 0 0 0-.14 1.23.5.5 0 1 1-.98.2 3 3 0 0 1 .23-1.9C2.66 3.5 3.38 3 4.54 3H16.5a.5.5 0 1 1 0 1H14v9.67c0 1.54.47 2.05.84 2.23.42.2 1 .09 1.43-.14a.5.5 0 1 1 .46.9c-.56.28-1.49.53-2.32.14-.88-.41-1.41-1.42-1.41-3.13V4H8v.03a90.2 90.2 0 0 1-.62 6.51 44.43 44.43 0 0 1-.6 3.52c-.23 1.06-.5 2-.83 2.66a.5.5 0 1 1-.9-.44c.27-.55.53-1.39.76-2.43.22-1.03.42-2.22.58-3.44.33-2.42.53-4.92.6-6.41H4.55c-.83 0-1.18.33-1.36.67Z";
   var pathdfilled = "M3.4 4.78c-.17.32-.18.76-.12 1.07a.75.75 0 1 1-1.47.3c-.1-.52-.11-1.34.26-2.06.41-.79 1.22-1.34 2.47-1.34H16.5a.75.75 0 0 1 0 1.5h-2.25v9.42c0 1.5.45 1.89.7 2 .32.15.8.08 1.21-.13a.75.75 0 0 1 .68 1.34c-.6.3-1.6.58-2.53.15-1.01-.47-1.56-1.61-1.56-3.36V4.25H8.24a90.75 90.75 0 0 1-.6 6.32 44.66 44.66 0 0 1-.61 3.55 12.38 12.38 0 0 1-.86 2.72.75.75 0 1 1-1.34-.68c.26-.5.5-1.33.73-2.36.23-1.03.42-2.21.58-3.42.31-2.28.5-4.62.6-6.13h-2.2c-.74 0-1.01.28-1.14.53Z";
   
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