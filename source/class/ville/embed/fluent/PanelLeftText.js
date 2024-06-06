/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PanelLeftText",
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

   var pathdregular = "M6.59 7a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm10 12H9V4h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2ZM5 4h3v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z";
   var pathdfilled = "M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm7 9h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9v11ZM6.59 7a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 0-.5-.5H4.41a.5.5 0 0 0 .09 1h2.09a.5.5 0 0 0 .41-.5Z";
   
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