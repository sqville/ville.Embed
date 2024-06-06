/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Ruler",
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

   var pathdregular = "M14 3.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 2 6 2.67 6 3.5v13c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-13ZM7 13h2.5a.5.5 0 0 0 0-1H7v-1.5h1.5a.5.5 0 0 0 0-1H7V8h2.5a.5.5 0 0 0 0-1H7V5.5h1.5a.5.5 0 0 0 0-1H7v-1c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1h1.5a.5.5 0 0 0 0-1H7V13Z";
   var pathdfilled = "m13.97 3.2.03.3v13c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-13A1.5 1.5 0 0 1 7.5 2h5c.72 0 1.33.51 1.47 1.2ZM7 14.5v1h1.5a.5.5 0 0 0 0-1H7Zm0-10v1h1.5a.5.5 0 0 0 0-1H7ZM7 7v1h2.5a.5.5 0 0 0 0-1H7Zm0 2.5v1h1.5a.5.5 0 0 0 0-1H7ZM7 12v1h2.5a.5.5 0 1 0 0-1H7Z";
   
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