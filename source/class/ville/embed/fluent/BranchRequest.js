/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BranchRequest",
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

   var pathdregular = "M5.5 7.96a3 3 0 1 0-1 0v4.08a3 3 0 1 0 1 0V7.96ZM5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm2 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4.15-8.15a.5.5 0 0 0 .7-.7L10.71 5h1.79A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2ZM17 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z";
   var pathdfilled = "M8 5a3 3 0 0 1-2.5 2.96v4.08a3 3 0 1 1-1 0V7.96A3 3 0 1 1 8 5Zm3.85 1.85a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L10.71 4h1.79A3.5 3.5 0 0 1 16 7.5v4.67a3 3 0 1 1-1-.17V7.5A2.5 2.5 0 0 0 12.5 5h-1.8l1.15 1.15c.2.2.2.5 0 .7Z";
   
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