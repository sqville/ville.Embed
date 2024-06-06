/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChevronCircleLeft",
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

   var pathdregular = "M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm8 7a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-6.15-3.15a.5.5 0 0 0-.7-.7l-3.5 3.5a.5.5 0 0 0 0 .7l3.5 3.5a.5.5 0 0 0 .7-.7L8.71 10l3.14-3.15Z";
   var pathdfilled = "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm1.85 4.85a.5.5 0 0 0-.7-.7l-3.5 3.5a.5.5 0 0 0 0 .7l3.5 3.5a.5.5 0 0 0 .7-.7L8.71 10l3.14-3.15Z";
   
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