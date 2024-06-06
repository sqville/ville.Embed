/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentFolder",
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

   var pathdregular = "M12 2a2 2 0 0 1 2 2v8h1V4.27c.6.34 1 .99 1 1.73v6.27c.6.34 1 .99 1 1.73v1.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 15.5V9a2 2 0 0 1 1-1.73V4c0-1.1.9-2 2-2h6ZM5 7h1.88a2 2 0 0 1 1.41.59l4.12 4.12a1 1 0 0 0 .59.28V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3ZM4 9v6.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V14a1 1 0 0 0-1-1h-1.88a2 2 0 0 1-1.41-.59L7.59 8.3A1 1 0 0 0 6.88 8H5a1 1 0 0 0-1 1Z";
   var pathdfilled = "M12 2a2 2 0 0 1 2 2v7h-.88L9 6.88A3 3 0 0 0 6.88 6H5a3 3 0 0 0-1 .17V4c0-1.1.9-2 2-2h6Zm3 9a3 3 0 0 1 1 .17V6a2 2 0 0 0-1-1.73V11ZM5 7a2 2 0 0 0-2 2v6.5A2.5 2.5 0 0 0 5.5 18h9a2.5 2.5 0 0 0 2.5-2.5V14a2 2 0 0 0-2-2h-1.88a1 1 0 0 1-.7-.3L8.28 7.6A2 2 0 0 0 6.88 7H5Z";
   
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