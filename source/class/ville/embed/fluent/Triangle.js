/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Triangle",
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

   var pathdregular = "M2.5 18a1.5 1.5 0 0 1-1.32-2.2l7.4-14a1.5 1.5 0 0 1 2.64-.02l7.6 14A1.5 1.5 0 0 1 17.5 18h-15Zm-.44-1.73a.5.5 0 0 0 .44.73h15a.5.5 0 0 0 .44-.74l-7.6-14a.5.5 0 0 0-.89 0l-7.39 14Z";
   var pathdfilled = "M1.18 15.8c-.53 1 .2 2.2 1.32 2.2h15a1.5 1.5 0 0 0 1.32-2.22l-7.6-14a1.5 1.5 0 0 0-2.65.02l-7.4 14Z";
   
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