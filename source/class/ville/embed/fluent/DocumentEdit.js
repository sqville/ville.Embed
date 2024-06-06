/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentEdit",
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

   var pathdregular = "M11.5 8H16v-.59a1.5 1.5 0 0 0-.06-.4V7a1.5 1.5 0 0 0-.38-.65l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2.22l-.01-.03A1.86 1.86 0 0 1 8 17H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5Zm0-1a.5.5 0 0 1-.5-.5V3.2L14.8 7h-3.3Zm3.3 2.55a1.87 1.87 0 1 1 2.65 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02l4.83-4.83Z";
   var pathdfilled = "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h2.72a1.86 1.86 0 0 1-.16-1.35l.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83c.53-.53 1.21-.8 1.9-.84h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm6.45 3.05a1.87 1.87 0 0 0-2.64 0l-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83c.73-.73.73-1.91 0-2.64Z";
   
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