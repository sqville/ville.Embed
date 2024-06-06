/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BugProhibited",
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

   var pathdregular = "M9.18 15.87c.1.38.23.74.4 1.09A3.99 3.99 0 0 1 6 13h-.5A1.5 1.5 0 0 0 4 14.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 5.5 12H6v-1.5H2.5a.5.5 0 0 1 0-1H6V8h-.5A2.5 2.5 0 0 1 3 5.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 0 5.5 7H6a3 3 0 0 1 2.31-2.92A2 2 0 0 1 8 3v-.5a.5.5 0 0 1 1 0V3a1 1 0 0 0 2 0v-.5a.5.5 0 0 1 1 0V3a2 2 0 0 1-.31 1.08A3 3 0 0 1 14 7h.5A1.5 1.5 0 0 0 16 5.5v-2a.5.5 0 0 1 1 0v2A2.5 2.5 0 0 1 14.5 8H14v1.03c-.34.03-.67.09-1 .18V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2.99 2.99 0 0 0 2.18 2.87ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-7.3 2.1 4.9-4.9a3.48 3.48 0 0 0-4.57.33 3.5 3.5 0 0 0-.33 4.57Zm6.3-2.1c0-.76-.24-1.5-.7-2.1l-4.9 4.9a3.48 3.48 0 0 0 4.57-.33A3.5 3.5 0 0 0 18 14.5Z";
   var pathdfilled = "M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM11 14.5a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9c-.46-.6-.7-1.34-.7-2.1Zm3.5 3.5c-.76 0-1.5-.24-2.1-.7l4.9-4.9a3.48 3.48 0 0 1-.33 4.57A3.5 3.5 0 0 1 14.5 18ZM17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96 5.46 5.46 0 0 1 .85-6.17A5.5 5.5 0 0 1 14 9.03V8h.5A2.5 2.5 0 0 0 17 5.5v-2Z";
   
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