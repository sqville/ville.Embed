/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocationTargetSquare",
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

   var pathdregular = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm3.5 4a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-.96.5H6a.5.5 0 0 1 0-1h.54A3.5 3.5 0 0 1 9.5 6.54V6a.5.5 0 0 1 1 0v.54a3.5 3.5 0 0 1 2.96 2.96H14a.5.5 0 0 1 0 1h-.54a3.5 3.5 0 0 1-2.96 2.96V14a.5.5 0 0 1-1 0v-.54a3.5 3.5 0 0 1-2.96-2.96Zm4.71-.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-.96.5H6a.5.5 0 0 1 0-1h.54A3.5 3.5 0 0 1 9.5 6.54V6a.5.5 0 0 1 1 0v.54a3.5 3.5 0 0 1 2.96 2.96H14a.5.5 0 0 1 0 1h-.54a3.5 3.5 0 0 1-2.96 2.96V14a.5.5 0 0 1-1 0v-.54a3.5 3.5 0 0 1-2.96-2.96Zm4.71-.5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z";
   
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