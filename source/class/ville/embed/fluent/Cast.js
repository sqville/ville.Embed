/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cast",
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

   var pathdregular = "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9ZM3.5 5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13Zm2 8.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM4 10.5c0-.28.22-.5.5-.5A3.5 3.5 0 0 1 8 13.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 0 4.5 11a.5.5 0 0 1-.5-.5ZM4 8c0-.28.22-.5.5-.5a6 6 0 0 1 6 6 .5.5 0 0 1-1 0 5 5 0 0 0-5-5A.5.5 0 0 1 4 8Z";
   var pathdfilled = "M3.5 4C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-13ZM4 8c0-.28.22-.5.5-.5a6 6 0 0 1 6 6 .5.5 0 0 1-1 0 5 5 0 0 0-5-5A.5.5 0 0 1 4 8Zm.5 2A3.5 3.5 0 0 1 8 13.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 0 4.5 11a.5.5 0 0 1 0-1Zm.25 4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z";
   
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