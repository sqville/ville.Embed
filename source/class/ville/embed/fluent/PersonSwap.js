/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonSwap",
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

   var pathdregular = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.29 0 .57 0 .85-.03L8.88 17a8.07 8.07 0 0 1-4.2-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h10a1 1 0 0 1 .67.25c.32-.21.7-.3 1.07-.23A2 2 0 0 0 14 11H4Zm7.85 6.85a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L10.71 15h5.58l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L16.29 16h-5.58l1.14 1.15c.2.2.2.5 0 .7Z";
   var pathdfilled = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.29 0 .57 0 .85-.03l-1.41-1.4a1.5 1.5 0 0 1 0-2.13l2-2A1.5 1.5 0 0 1 12.9 14h1.18a1.5 1.5 0 0 1 1.65-1.98A2 2 0 0 0 14 11H4Zm7.85 6.85a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L10.71 15h5.58l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L16.29 16h-5.58l1.14 1.15c.2.2.2.5 0 .7Z";
   
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