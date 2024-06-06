/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaddingTop",
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

   var pathdregular = "M3.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM9.85 4.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L9 5.71v9.79a.5.5 0 0 0 1 0V5.7l3.65 3.65a.5.5 0 0 0 .7-.7l-4.5-4.5ZM3.5 17a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12Z";
   var pathdfilled = "M3.75 2.75c0-.41.34-.75.75-.75h1.31a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm3.94 0c0-.41.33-.75.75-.75h2.62a.75.75 0 0 1 0 1.5H8.44a.75.75 0 0 1-.75-.75Zm5.25 0c0-.41.33-.75.75-.75H15a.75.75 0 0 1 0 1.5h-1.31a.75.75 0 0 1-.75-.75Zm-9.19 14.5c0-.41.34-.75.75-.75H15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm6.53-12.53a.75.75 0 0 0-1.06 0L4.97 8.97a.75.75 0 1 0 1.06 1.06L9 7.06v7.19a.75.75 0 0 0 1.5 0V7.06l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25Z";
   
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