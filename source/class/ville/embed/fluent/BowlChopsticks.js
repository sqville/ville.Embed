/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BowlChopsticks",
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

   var pathdregular = "M4.93 2.24a.5.5 0 0 0-.86.52L7.91 9H2.5a.5.5 0 0 0-.5.5v.5a8 8 0 0 0 16 0v-.5a.5.5 0 0 0-.5-.5h-5.41L7.93 2.24a.5.5 0 0 0-.86.52L10.91 9H9.1L4.93 2.24ZM3.29 12A7 7 0 0 1 3 10h14a7 7 0 0 1-.29 2H3.29Zm.38 1h12.66a7 7 0 0 1-12.66 0Z";
   var pathdfilled = "M4.24 2.07a.5.5 0 0 1 .69.17L9.09 9h1.82L7.07 2.76a.5.5 0 0 1 .86-.52L12.09 9h5.41c.28 0 .5.22.5.5v.5c0 .7-.09 1.36-.25 2H2.25A8.02 8.02 0 0 1 2 10v-.5c0-.28.22-.5.5-.5h5.41L4.07 2.76a.5.5 0 0 1 .17-.69ZM10 18a8 8 0 0 1-7.42-5h14.84A8 8 0 0 1 10 18Z";
   
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