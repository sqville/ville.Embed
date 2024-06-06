/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Merge",
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

   var pathdregular = "M3 5.5c0-.28.22-.5.5-.5h1.65c1 0 1.95.43 2.62 1.17l2.2 2.5a2.5 2.5 0 0 0 1.88.83h4.44l-3.64-3.65a.5.5 0 0 1 .7-.7l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65h-4.44c-.72 0-1.4.3-1.87.84l-2.21 2.49A3.5 3.5 0 0 1 5.15 15H3.5a.5.5 0 0 1 0-1h1.65c.72 0 1.4-.3 1.87-.84l2.21-2.49c.24-.26.51-.49.81-.67a3.5 3.5 0 0 1-.8-.67l-2.22-2.5A2.5 2.5 0 0 0 5.15 6H3.5a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M3 5.75c0-.41.34-.75.75-.75h1.76c1 0 1.95.4 2.65 1.1l2.5 2.5c.41.41.99.65 1.58.65h3.2l-2.97-2.97a.75.75 0 0 1 1.06-1.06l4.25 4.25c.3.3.3.77 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l2.97-2.97h-3.2c-.6 0-1.17.24-1.59.66l-2.5 2.5C7.46 14.6 6.5 15 5.52 15H3.75a.75.75 0 0 1 0-1.5h1.76c.6 0 1.17-.24 1.59-.66l2.5-2.5c.12-.12.25-.23.4-.34-.15-.1-.28-.22-.4-.35l-2.5-2.5c-.42-.41-1-.65-1.6-.65H3.76A.75.75 0 0 1 3 5.75Z";
   
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