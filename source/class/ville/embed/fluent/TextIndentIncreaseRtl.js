/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextIndentIncreaseRtl",
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

   var pathdregular = "M5 4.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-3 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5ZM7.5 14a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm10.37-6.26a.5.5 0 0 0-.71 0l-1.41 1.41a.5.5 0 0 0 0 .7l1.41 1.42a.5.5 0 1 0 .7-.7L16.82 9.5l1.06-1.06a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M14 4.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5c.41 0 .75-.34.75-.75ZM13.25 9a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5Zm0 5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5Zm3.72-6.28a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5Z";
   
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