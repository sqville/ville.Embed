/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrawerPlay",
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

   var pathdregular = "M17 9.74V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.2c-.08.32-.15.66-.18 1H6a2 2 0 0 0-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 1 0 4 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66ZM14 17a2 2 0 0 0 2-2v-3h-3.04a3 3 0 0 1-5.92 0H4v3c0 1.1.9 2 2 2h8Zm-.5-7a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.76-6.59 2.97 1.65a.5.5 0 0 1 0 .88l-2.97 1.65a.5.5 0 0 1-.74-.44v-3.3a.5.5 0 0 1 .74-.44Z";
   var pathdfilled = "M8.2 4H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 0 0-.5.5 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1Zm5.3 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.76-6.59 2.97 1.65a.5.5 0 0 1 0 .88l-2.97 1.65a.5.5 0 0 1-.74-.44v-3.3a.5.5 0 0 1 .74-.44Z";
   
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