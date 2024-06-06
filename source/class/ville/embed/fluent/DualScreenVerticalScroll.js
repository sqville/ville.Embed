/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenVerticalScroll",
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

   var pathdregular = "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1V6Zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.5Zm5.35-3.85c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 1.65-1.64c.2-.2.5-.2.7 0Zm0-3a.5.5 0 0 1-.7.7L13.5 7.21l-1.65 1.64a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2Z";
   var pathdfilled = "M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5v12Zm-1-12H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V4Zm7.35 7.15c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 1.65-1.64c.2-.2.5-.2.7 0Zm0-3a.5.5 0 0 1-.7.7L14.5 7.21l-1.65 1.64a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2Z";
   
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