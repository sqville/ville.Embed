/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlagOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L4 4.71V17.5a.5.5 0 0 0 1 0V13h7.3l4.85 4.85a.5.5 0 0 0 .7-.7l-15-15ZM11.3 12H5V5.7l6.3 6.3Zm4.28 0h-1.45l1 1h1.38a.5.5 0 0 0 .42-.78L14.1 8l2.82-4.22A.5.5 0 0 0 16.5 3H5.12l1 1h9.45l-2.49 3.72a.5.5 0 0 0 0 .56L15.57 12Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L4 4.71V17.5a.5.5 0 0 0 1 0V13h7.3l4.85 4.85a.5.5 0 0 0 .7-.7l-15-15ZM16.5 13h-1.38l-10-10H16.5c.4 0 .64.45.42.78L14.1 8l2.82 4.22a.5.5 0 0 1-.42.78Z";
   
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