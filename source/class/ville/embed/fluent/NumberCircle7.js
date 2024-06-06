/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle7",
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

   var pathdregular = "M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM7.5 6a.5.5 0 0 0 0 1h4.08A20.3 20.3 0 0 0 9 13.92a.5.5 0 1 0 .98.16 19.3 19.3 0 0 1 2.9-7.25V6.8h.01a.5.5 0 0 0-.4-.8h-5Z";
   var pathdfilled = "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5.5-4a.5.5 0 0 0 0 1h4.08A20.3 20.3 0 0 0 9 13.92a.5.5 0 1 0 .98.16 19.3 19.3 0 0 1 2.9-7.25V6.8h.01a.5.5 0 0 0-.4-.8h-5Z";
   
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