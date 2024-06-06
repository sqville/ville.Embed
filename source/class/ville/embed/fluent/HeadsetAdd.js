/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeadsetAdd",
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

   var pathdregular = "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm0 7.5v-.02c.34-.03.68-.1 1-.19V11a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-1.6c.32.16.65.3 1 .4V12h1a1 1 0 0 0 1-1Zm-4.75-9a5.5 5.5 0 0 0-.66 1.02A5 5 0 0 0 5 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5v1c0 1.1.9 2 2 2h1a2 2 0 1 1 .27 1H7a3 3 0 0 1-3-3V8a6 6 0 0 1 6.25-6ZM5 12h2V9H5v3Zm4 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z";
   var pathdfilled = "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5a5.5 5.5 0 0 0 1.5-.2v.2a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-1.6c.75.38 1.6.6 2.5.6Zm-4.25-9a5.5 5.5 0 0 0-.66 1.02A5 5 0 0 0 5 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5v1c0 1.1.9 2 2 2h1a2 2 0 1 1 .27 1H7a3 3 0 0 1-3-3V8a6 6 0 0 1 6.25-6Z";
   
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