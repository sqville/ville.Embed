/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cloud",
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

   var pathdregular = "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62 3.33 3.33 0 0 1 14.72 15H5.28A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm0 1C7.89 5 6.55 6.32 6.35 8.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 11.62 2.33 2.33 0 0 0 5.28 14h9.44A2.33 2.33 0 0 0 17 11.62a2.33 2.33 0 0 0-2.28-2.37h-.07a1 1 0 0 1-1-.9C13.45 6.32 12.11 5 10 5Z";
   var pathdfilled = "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62 3.33 3.33 0 0 1 14.72 15H5.28A3.33 3.33 0 0 1 2 11.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 5.9 7.18 4 10 4Z";
   
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