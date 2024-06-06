/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Attach",
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

   var pathdregular = "m4.83 10.48 5.65-5.65a3 3 0 0 1 4.25 4.24L8 15.8a1.5 1.5 0 0 1-2.12-2.12l6-6.01a.5.5 0 1 0-.7-.71l-6 6.01a2.5 2.5 0 0 0 3.53 3.54l6.71-6.72a4 4 0 1 0-5.65-5.66L4.12 9.78a.5.5 0 0 0 .7.7Z";
   var pathdfilled = "m5.28 10.6 5.3-5.3a2.75 2.75 0 1 1 3.9 3.9L8.1 15.55a1.25 1.25 0 1 1-1.77-1.77L12 8.13a.75.75 0 0 0-1.06-1.06l-5.66 5.66a2.75 2.75 0 0 0 3.89 3.89l6.36-6.36a4.25 4.25 0 0 0-6-6.02l-5.31 5.3a.75.75 0 0 0 1.06 1.07Z";
   
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