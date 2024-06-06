/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Layer",
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

   var pathdregular = "M10.5 3.12a1 1 0 0 0-1 0L3.47 6.64a1 1 0 0 0 0 1.72l6.02 3.5a1 1 0 0 0 1 0l6.01-3.5a1 1 0 0 0 0-1.72l-6-3.52Zm-1 1.16a1 1 0 0 1 1 0L16 7.5l-5.5 3.2a1 1 0 0 1-1 0L3.99 7.5l5.5-3.22ZM3.06 9.65l6.44 3.62a1 1 0 0 0 .98 0l6.44-3.62a1 1 0 0 1-.42 1.26l-6 3.5a1 1 0 0 1-1.01 0l-6.01-3.5a1 1 0 0 1-.42-1.26Zm0 2.45 6.44 3.63a1 1 0 0 0 .98 0l6.44-3.63a1 1 0 0 1-.42 1.26l-6 3.5a1 1 0 0 1-1.01 0l-6.01-3.5a1 1 0 0 1-.42-1.26Z";
   var pathdfilled = "M10.5 3.12a1 1 0 0 0-1 0L3.47 6.64a1 1 0 0 0 0 1.72l6.02 3.5a1 1 0 0 0 1 0l6.01-3.5a1 1 0 0 0 0-1.72l-6-3.52ZM3.07 9.65l6.44 3.62a1 1 0 0 0 .98 0l6.44-3.62a1 1 0 0 1-.42 1.26l-6 3.5a1 1 0 0 1-1.01 0l-6.01-3.5a1 1 0 0 1-.42-1.26Zm0 2.45 6.44 3.63a1 1 0 0 0 .98 0l6.44-3.63a1 1 0 0 1-.42 1.26l-6 3.5a1 1 0 0 1-1.01 0l-6.01-3.5a1 1 0 0 1-.42-1.26Z";
   
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