/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSortDownLines",
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

   var pathdregular = "M15 2.5a.5.5 0 0 0-1 0v13.8l-2.15-2.15a.5.5 0 0 0-.7.7l3 3c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7L15 16.29V2.5ZM2.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM5 7.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5ZM8.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z";
   var pathdfilled = "M15 2.75a.75.75 0 0 0-1.5 0v12.57l-1.45-1.58a.75.75 0 0 0-1.1 1.02l2.75 3a.75.75 0 0 0 1.1 0l2.75-3a.75.75 0 0 0-1.1-1.02L15 15.32V2.75ZM2.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM5 7.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 7.25ZM8.75 9.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z";
   
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