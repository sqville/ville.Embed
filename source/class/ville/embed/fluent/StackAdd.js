/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StackAdd",
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

   var pathdregular = "M10 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V6H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H6V4.5Zm6 .5h-1.2c-.1-.35-.24-.68-.4-1H12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.26c.3.26.64.48 1 .66v.6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM6 16a2 2 0 0 1-1.73-1H12a3 3 0 0 0 3-3V6.27c.6.34 1 .99 1 1.73v4a4 4 0 0 1-4 4H6Zm2 2a2 2 0 0 1-1.73-1H12a5 5 0 0 0 5-5V8.27c.6.34 1 .99 1 1.73v2a6 6 0 0 1-6 6H8Z";
   var pathdfilled = "M10 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V6H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H6V4.5ZM5.5 12a5.5 5.5 0 0 0 4.9-8H12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.26A5.48 5.48 0 0 0 5.5 12Zm-1.23 3c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4V8a2 2 0 0 0-1-1.73V12a3 3 0 0 1-3 3H4.27Zm2 2c.34.6.99 1 1.73 1h4a6 6 0 0 0 6-6v-2a2 2 0 0 0-1-1.73V12a5 5 0 0 1-5 5H6.27Z";
   
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