/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CubeLink",
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

   var pathdregular = "M5.04 6.3a.5.5 0 0 1 .66-.26L10 7.95l4.3-1.9a.5.5 0 1 1 .4.9l-4.2 1.87v4.68a.5.5 0 0 1-1 0V8.82L5.3 6.96a.5.5 0 0 1-.26-.66ZM8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v5.85a3.54 3.54 0 0 0-.5-.03H17V6.18a.5.5 0 0 0-.31-.47l-5.76-2.3a2.5 2.5 0 0 0-1.86 0L3.31 5.7a.5.5 0 0 0-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3c.37.15.77.2 1.16.17.13.33.31.65.54.92-.69.16-1.41.1-2.07-.16l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3ZM13.5 13a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-3.5 2a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   var pathdfilled = "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v5.85a3.54 3.54 0 0 0-.5-.03h-4a3.5 3.5 0 0 0-2.73 5.68c-.69.16-1.41.1-2.07-.16l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3Zm-3 3.56a.5.5 0 1 0-.4.92l4.2 1.86v4.68a.5.5 0 0 0 1 0V8.82l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9ZM13.5 13a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   
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