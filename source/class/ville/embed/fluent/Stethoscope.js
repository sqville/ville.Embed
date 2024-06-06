/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Stethoscope",
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

   var pathdregular = "M2.5 2a.5.5 0 0 0-.5.5v5a4.5 4.5 0 0 0 4 4.47V13a5 5 0 0 0 10 0v-1.05a2.5 2.5 0 1 0-1 0V13a4 4 0 1 1-8 0v-1.03a4.5 4.5 0 0 0 4-4.47v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H10v4.5a3.5 3.5 0 0 1-7 0V3h1.5a.5.5 0 0 0 0-1h-2Zm13 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z";
   var pathdfilled = "M2.75 2a.75.75 0 0 0-.75.75v5a4.5 4.5 0 0 0 3.75 4.44v1.06a5.25 5.25 0 1 0 10.5 0v-1.1a2.75 2.75 0 1 0-1.5 0v1.1a3.75 3.75 0 1 1-7.5 0v-1.06A4.5 4.5 0 0 0 11 7.75v-5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h.75v4.25a3 3 0 1 1-6 0V3.5h.75a.75.75 0 0 0 0-1.5h-1.5ZM15.5 8.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z";
   
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