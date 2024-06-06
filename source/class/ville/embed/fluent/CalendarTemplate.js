/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarTemplate",
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

   var pathdregular = "M2 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.04a3.53 3.53 0 0 0-.5-.04H15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2v.5c0 .17.01.34.04.5H5a3 3 0 0 1-3-3V5Zm3.5 2h5c-.95 0-1.82.38-2.45 1H5.5a.5.5 0 0 1 0-1ZM5 5.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM10.5 8A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8h-5ZM9 10.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.5H9v-.5Zm0 5V12h8v3.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5Z";
   var pathdfilled = "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.04a3.53 3.53 0 0 1-.04-.5v-5c0-.98.4-1.86 1.05-2.5H5.5a.5.5 0 0 1 0-1h10c.17 0 .34.01.5.04V5a3 3 0 0 0-3-3H5Zm0 3.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm3 5A2.5 2.5 0 0 1 10.5 8h5a2.5 2.5 0 0 1 2.5 2.5v.5H8v-.5Zm0 5V12h10v3.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 8 15.5Z";
   
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