/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextIndentDecreaseRtl",
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

   var pathdregular = "M5.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm-3 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM7 14.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm9.45-6.76a.5.5 0 1 0-.7.7L16.8 9.5l-1.06 1.06a.5.5 0 1 0 .7.71l1.42-1.41a.5.5 0 0 0 0-.7l-1.42-1.42Z";
   var pathdfilled = "M13.25 4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h7.5ZM14 9.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h10.5c.41 0 .75-.34.75-.75Zm0 5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h5.5c.41 0 .75-.34.75-.75Zm1.22-7.03c.3-.3.77-.3 1.06 0l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06Z";
   
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