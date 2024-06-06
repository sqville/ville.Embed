/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CommentLightning",
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

   var pathdregular = "M12.61 7c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Zm-1.28-4-.41 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56V7.94L18 7v5.28a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h6.73Z";
   var pathdfilled = "M12.61 7c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Zm-.64 1h-.47a1.5 1.5 0 0 1-1.38-2.08L11.33 3H4.6A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56V7l-3.83 3.58c-1.1 1.02-2.84-.01-2.48-1.46L11.97 8Z";
   
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