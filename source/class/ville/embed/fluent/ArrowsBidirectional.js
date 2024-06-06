/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowsBidirectional",
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

   var pathdregular = "M6.68 5.03c.2.08.32.26.32.47V8h6V5.5a.5.5 0 0 1 .87-.33l4 4.5a.5.5 0 0 1 0 .66l-4 4.5a.5.5 0 0 1-.87-.33V12H7v2.5a.5.5 0 0 1-.87.33l-4-4.5a.5.5 0 0 1 0-.66l4-4.5a.5.5 0 0 1 .55-.14ZM3.17 10 6 13.18V11.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.68L16.83 10 14 6.82V8.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V6.82L3.17 10Z";
   var pathdfilled = "M6.68 5.03c.2.08.32.26.32.47V8h6V5.5a.5.5 0 0 1 .87-.33l4 4.5a.5.5 0 0 1 0 .66l-4 4.5a.5.5 0 0 1-.87-.33V12H7v2.5a.5.5 0 0 1-.87.33l-4-4.5a.5.5 0 0 1 0-.66l4-4.5a.5.5 0 0 1 .55-.14Z";
   
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