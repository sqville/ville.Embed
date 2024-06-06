/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlipVertical",
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

   var pathdregular = "M15.77 2.08c.14.1.23.25.23.42v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.2-.95l13-6a.5.5 0 0 1 .47.03ZM4.77 8H15V3.28L4.78 8ZM16 17.5a.5.5 0 0 1-.71.45l-13-6A.5.5 0 0 1 2.5 11h13c.28 0 .5.22.5.5v6Z";
   var pathdfilled = "M15.66 2.12c.21.14.34.38.34.63v5.5c0 .41-.34.75-.75.75H2.75a.75.75 0 0 1-.3-1.44l12.5-5.5c.23-.1.5-.08.71.06ZM6.32 7.5h8.18V3.9L6.32 7.5Zm9.68 10a.5.5 0 0 1-.71.45l-13-6A.5.5 0 0 1 2.5 11h13c.28 0 .5.22.5.5v6Z";
   
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