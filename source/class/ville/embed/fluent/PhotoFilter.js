/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhotoFilter",
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

   var pathdregular = "M2 8a6 6 0 0 0 4.26 5.74 6 6 0 1 0 7.48-7.48A6 6 0 0 0 2 8Zm6-5a5 5 0 0 1 4.6 3.03L12 6a6 6 0 0 0-5.97 6.6A5 5 0 0 1 8 3Zm9 9a5 5 0 0 1-9.6 1.97L8 14a6 6 0 0 0 5.97-6.6A5 5 0 0 1 17 12Z";
   var pathdfilled = "M6.26 13.74a6 6 0 1 1 7.48-7.48 6 6 0 1 1-7.48 7.48ZM3.5 8A4.5 4.5 0 0 0 6 12.03V12a6 6 0 0 1 6.03-6A4.5 4.5 0 0 0 3.5 8Zm4.47 6A4.5 4.5 0 1 0 14 7.97V8a6 6 0 0 1-6 6h-.03Z";
   
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