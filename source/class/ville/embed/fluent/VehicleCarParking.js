/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCarParking",
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

   var pathdregular = "M14 1.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5v-5ZM13 3H6.14a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v5c0 .83.67 1.5 1.5 1.5H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 0 0 1 1v-3H3.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H15V8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4H13V3Zm2 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   var pathdfilled = "M14 1.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5v-5ZM13 3H6.14a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v4c0 .83.67 1.5 1.5 1.5H15V8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4H13V3Zm2 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6.5a1 1 0 0 1-1-1v-1h1v2Zm-9-1v-1H4v1a1 1 0 1 0 2 0Zm-1-5.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z";
   
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