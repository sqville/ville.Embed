/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneVerticalScroll",
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

   var pathdregular = "M7.65 11.15c.2-.2.5-.2.7 0L10 12.79l1.65-1.64a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7Zm4-2.3a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L10 7.21l1.65 1.64ZM5 3.5C5 2.67 5.67 2 6.5 2h7c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5v-13ZM6.5 3a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-7Z";
   var pathdfilled = "M5 3.5C5 2.67 5.67 2 6.5 2h7c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5v-13Zm7.35 5.35a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L10 7.21l1.65 1.64c.2.2.5.2.7 0Zm-4.7 2.3a.5.5 0 0 0 0 .7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7L10 12.79l-1.65-1.64a.5.5 0 0 0-.7 0Z";
   
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