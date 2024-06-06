/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cube",
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

   var pathdregular = "M5.7 6.04a.5.5 0 1 0-.4.92l4.2 1.86v4.68a.5.5 0 0 0 1 0V8.82l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9Zm5.6-3.56a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 0 0 2.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.76 2.3a.5.5 0 0 1 .31.47v7.64a.5.5 0 0 1-.31.47l-5.76 2.3a2.5 2.5 0 0 1-1.86 0l-5.76-2.3a.5.5 0 0 1-.31-.47V6.18c0-.2.12-.4.31-.47l5.76-2.3Z";
   var pathdfilled = "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v7.64a1.5 1.5 0 0 1-.94 1.4l-5.76 2.3a3.5 3.5 0 0 1-2.6 0l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3Zm-3 3.56a.5.5 0 1 0-.4.92l4.2 1.86v4.68a.5.5 0 0 0 1 0V8.82l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9Z";
   
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