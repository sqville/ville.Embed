/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextEditStyle",
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

   var pathdregular = "M14.09 6.7a2.26 2.26 0 0 1 3.07-.12l.13.12.12.13c.73.85.73 2.1 0 2.96l-.12.13-6.87 6.9a1.5 1.5 0 0 1-.55.35l-.16.05-3.08.76a.5.5 0 0 1-.62-.53l.01-.08.8-3.07c.05-.21.15-.4.28-.57l.1-.12 6.89-6.9Zm2.5.7a1.26 1.26 0 0 0-1.7-.08l-.1.09-6.88 6.9a.5.5 0 0 0-.1.15l-.03.08-.58 2.27 2.27-.56a.5.5 0 0 0 .12-.05l.05-.03.07-.06 6.87-6.9c.5-.5.5-1.3 0-1.8ZM6.41 2.24l.05.08 2.98 7.63-.77.78L8 9H4l-1.03 2.68a.5.5 0 0 1-.56.3l-.1-.02a.5.5 0 0 1-.3-.56l.02-.08 3.5-9a.5.5 0 0 1 .9-.1ZM6 3.87 4.4 8H7.6l-1.6-4.13Z";
   var pathdfilled = "M14.09 6.7a2.26 2.26 0 0 1 3.07-.12l.13.12.12.13c.73.85.73 2.1 0 2.96l-.12.13-6.87 6.9a1.5 1.5 0 0 1-.55.35l-.16.05-3.08.76a.5.5 0 0 1-.62-.53l.01-.08.8-3.07c.05-.21.15-.4.28-.57l.1-.12 6.89-6.9ZM6.42 2.23l.05.08 2.98 7.63-.77.78L8 9H4l-1.03 2.68a.5.5 0 0 1-.56.3l-.1-.02a.5.5 0 0 1-.3-.56l.02-.08 3.5-9a.5.5 0 0 1 .9-.1ZM6 3.87 4.4 8H7.6l-1.6-4.13Z";
   
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