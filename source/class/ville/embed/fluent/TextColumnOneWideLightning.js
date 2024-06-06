/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextColumnOneWideLightning",
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

   var pathdregular = "M3.5 5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 7h7l.42-1H3.5a.5.5 0 0 0 0 1Zm8.67-4-.42 1H3.5a.5.5 0 0 1 0-1h8.67Zm-.67 6.01h1.75l-.59 2.37c-.12.48.46.82.83.48l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.35a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5.02c-.14.33.1.7.46.7Z";
   var pathdfilled = "M3 5.75c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.75Zm0 3c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 8.75ZM3.75 11a.75.75 0 0 0 0 1.5h7.8l.62-1.5H3.75Zm7.17 3-.63 1.5H3.75a.75.75 0 0 1 0-1.5h7.17Zm.58 3.01h1.75l-.59 2.37c-.12.48.46.82.83.48l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.35a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5.02c-.14.33.1.7.46.7Z";
   
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