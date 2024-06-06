/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowFitIn",
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

   var pathdregular = "M5.65 7.35a.5.5 0 1 1 .7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7L7.29 10H2.5a.5.5 0 0 1 0-1h4.8L5.64 7.35Zm8.7 0a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L12.71 10h4.79a.5.5 0 0 0 0-1h-4.8l1.65-1.65Z";
   var pathdfilled = "M5.21 7.78a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 .01 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H2.75a.75.75 0 0 1 0-1.5h3.68L5.21 7.78Zm9.58 0a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0-.01 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h3.69a.75.75 0 0 0 0-1.5h-3.68l1.22-1.22Z";
   
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