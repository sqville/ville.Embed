/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowDatabase",
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

   var pathdregular = "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H4v7c0 1.1.9 2 2 2h3v.5c0 .17.02.34.05.5H6a3 3 0 0 1-3-3V6Zm13 2.14c-.47-.09-.97-.14-1.5-.14-2.49 0-4.5 1.12-4.5 2.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08-.3-.11-.64-.2-1-.28ZM6 4a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm8.5 10c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5V16H6a2 2 0 0 1-2-2V7h13V6a3 3 0 0 0-3-3H6Zm11 5.42A7.81 7.81 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z";
   
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