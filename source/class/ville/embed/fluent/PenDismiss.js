/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PenDismiss",
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

   var pathdregular = "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.88c.47-.1.9-.33 1.24-.67L8.2 16c-.11-.39-.18-.8-.2-1.21l-.95.94c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l9.37-9.38a1.97 1.97 0 0 1 2.79 2.8L13.78 9c.42.02.83.09 1.22.2l2.13-2.13a2.97 2.97 0 0 0 .05-4.15ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z";
   var pathdfilled = "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21L15 9.21A5.5 5.5 0 0 0 8.2 16l-.43.44c-.34.34-.77.57-1.24.68l-3.92.87a.5.5 0 0 1-.6-.6l.88-3.95c.1-.45.33-.86.66-1.2l9.37-9.37ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z";
   
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