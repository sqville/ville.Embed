/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Bench",
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

   var pathdregular = "M3 6c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4a2 2 0 1 1 0 4v1.5a.5.5 0 0 1-1 0V14H4v1.5a.5.5 0 0 1-1 0V14a2 2 0 1 1 0-4V6Zm14 7a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2h14Zm-1-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4h12V6Z";
   var pathdfilled = "M5 4a2 2 0 0 0-2 2v4h14V6a2 2 0 0 0-2-2H5Zm-2.5 7a1.5 1.5 0 0 0 0 3H3v1.5a.5.5 0 0 0 1 0V14h12v1.5a.5.5 0 0 0 1 0V14h.5a1.5 1.5 0 0 0 0-3h-15Z";
   
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