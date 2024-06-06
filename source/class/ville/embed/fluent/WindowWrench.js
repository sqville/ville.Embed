/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowWrench",
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

   var pathdregular = "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.62a1.38 1.38 0 0 0-1-.59V7H4v7c0 1.1.9 2 2 2h2.5c-.23.3-.38.65-.45 1H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm10.24 5.36a.39.39 0 0 0-.35-.34 3.51 3.51 0 0 0-3.72 4.68l-2.73 2.73a1.5 1.5 0 0 0 0 2.13 1.5 1.5 0 0 0 2.13 0l2.73-2.73a3.52 3.52 0 0 0 4.68-3.72c-.05-.37-.48-.47-.75-.21l-.97.97a1.52 1.52 0 0 1-1.26.43 1.5 1.5 0 0 1-.87-2.56l.97-.97a.49.49 0 0 0 .14-.4Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.05c.07-.35.22-.7.44-1H6a2 2 0 0 1-2-2V7h12v1.03c.44.05.79.28 1 .6V6a3 3 0 0 0-3-3H6Zm6.17 10.7A3.52 3.52 0 0 1 16 9.05c.14.05.22.17.24.31v.15a.49.49 0 0 1-.14.26l-.97.97a1.5 1.5 0 1 0 2.13 2.13l.97-.97c.27-.26.7-.16.75.2a3.51 3.51 0 0 1-4.68 3.73l-2.73 2.73a1.5 1.5 0 1 1-2.13-2.13l2.73-2.73Z";
   
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