/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowForward",
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

   var pathdregular = "m16.3 9-3.4 3.39a.5.5 0 0 0 .64.76l.07-.05 4.24-4.25a.5.5 0 0 0 .06-.63l-.06-.07-4.24-4.25a.5.5 0 0 0-.76.64l.05.07L16.3 8H10a7.5 7.5 0 0 0-7.5 7.26v.24a.5.5 0 0 0 1 0A6.5 6.5 0 0 1 9.77 9h6.53Z";
   var pathdfilled = "m15.69 9.5-2.96 2.96a.75.75 0 0 0 .97 1.14l.09-.08 4.24-4.24a.75.75 0 0 0 .07-.98l-.07-.08-4.24-4.24a.75.75 0 0 0-1.14.97l.08.09L15.69 8H10a7.75 7.75 0 0 0-7.75 7.5v.25a.75.75 0 0 0 1.5 0A6.25 6.25 0 0 1 9.77 9.5H15.7Z";
   
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