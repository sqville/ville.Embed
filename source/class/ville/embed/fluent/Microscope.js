/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Microscope",
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

   var pathdregular = "M7 2.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V3h.5c.28 0 .5.22.5.5v1.53A6.5 6.5 0 0 1 13.96 17h2.54a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h7A5.5 5.5 0 0 0 11 6.02v5.48a.5.5 0 0 1-.5.5H10v.5a1.5 1.5 0 0 1-3 0V12h-.5a.5.5 0 0 1-.5-.5v-8c0-.28.22-.5.5-.5H7v-.5ZM8 12v.5a.5.5 0 0 0 1 0V12H8Zm-1-1h3V4H7v7Zm-1.5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z";
   var pathdfilled = "M7 2.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V3h.5c.28 0 .5.22.5.5v1.53A6.5 6.5 0 0 1 13.96 17h2.54a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h7A5.5 5.5 0 0 0 11 6.02v5.48a.5.5 0 0 1-.5.5H10v.5a1.5 1.5 0 0 1-3 0V12h-.5a.5.5 0 0 1-.5-.5v-8c0-.28.22-.5.5-.5H7v-.5ZM8 12v.5a.5.5 0 0 0 1 0V12H8Zm-2.5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z";
   
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