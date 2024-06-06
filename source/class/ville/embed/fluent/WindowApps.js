/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowApps",
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

   var pathdregular = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1v-1H6a2 2 0 0 1-2-2V7h13V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm10.75 2C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75C19 8.78 18.22 8 17.25 8h-2.5ZM18 16.5c0 .83-.67 1.5-1.5 1.5H14v-4h4v2.5Zm-4-6.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4V9.75ZM9.75 14H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75Z";
   var pathdfilled = "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H4v7c0 1.1.9 2 2 2h1v1H6a3 3 0 0 1-3-3V6Zm11.75 2C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75C19 8.78 18.22 8 17.25 8h-2.5ZM18 16.5c0 .83-.67 1.5-1.5 1.5H14v-4h4v2.5Zm-4-6.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4V9.75ZM9.75 14H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75Z";
   
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