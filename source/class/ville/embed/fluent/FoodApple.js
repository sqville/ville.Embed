/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FoodApple",
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

   var pathdregular = "M7.22 8.34a.5.5 0 0 1-.31.63c-.28.1-.54.27-.72.6-.18.36-.31.93-.2 1.87a.5.5 0 0 1-.99.12c-.13-1.06 0-1.86.31-2.45.32-.6.8-.93 1.28-1.08a.5.5 0 0 1 .63.31Zm4.94-5.37a.5.5 0 1 0-.32-.94 3.18 3.18 0 0 0-1.86 1.9c-.05.11-.1.23-.13.34A4 4 0 0 0 6.2 2.14c-.58.01-1.04.48-1.06 1.06a3.99 3.99 0 0 0 1.2 2.97A4 4 0 0 0 3.2 9.76v.07a8.5 8.5 0 0 0 1 4.75l.36.66a.5.5 0 0 0 .03.05l1 1.4a2.69 2.69 0 0 0 4.09.34.46.46 0 0 1 .64 0 2.69 2.69 0 0 0 4.09-.34l1-1.4a.51.51 0 0 0 .03-.05l.36-.66a8.5 8.5 0 0 0 1-4.75v-.07a4 4 0 0 0-4.64-3.63l-1.66.28c.01-.68.13-1.45.4-2.1.28-.67.7-1.15 1.26-1.34ZM8.72 6.28l-.16-.03a2.98 2.98 0 0 1-2.42-3.02c0-.05.04-.09.09-.1a2.99 2.99 0 0 1 3.08 3.1c0 .04-.04.08-.09.08-.17 0-.33 0-.5-.03Zm-.33.96.17.03.78.13a4 4 0 0 0 1.32 0l1.66-.28a3 3 0 0 1 3.49 2.72v.07a7.5 7.5 0 0 1-.89 4.2l-.34.62-.99 1.38c-.6.85-1.82.95-2.56.21a1.46 1.46 0 0 0-2.06 0c-.74.74-1.96.64-2.56-.21l-.99-1.38-.34-.63a7.5 7.5 0 0 1-.9-4.19l.01-.07a3 3 0 0 1 3.49-2.72l.71.12Z";
   var pathdfilled = "M12.16 2.97a.5.5 0 1 0-.32-.94 3.18 3.18 0 0 0-1.86 1.9c-.05.11-.1.23-.13.34A4 4 0 0 0 6.2 2.14c-.58.01-1.04.48-1.06 1.06A3.99 3.99 0 0 0 6.3 6.14l.03.03A4 4 0 0 0 3.2 9.76v.07a8.5 8.5 0 0 0 1 4.75l.36.66a.5.5 0 0 0 .03.05l1 1.4a2.69 2.69 0 0 0 4.09.34.46.46 0 0 1 .64 0 2.69 2.69 0 0 0 4.09-.34l1-1.4a.51.51 0 0 0 .03-.05l.36-.66a8.5 8.5 0 0 0 1-4.75v-.07a4 4 0 0 0-4.64-3.63l-1.66.28c.01-.68.13-1.45.4-2.1.28-.67.7-1.15 1.26-1.34Zm-5.25 6c-.27.1-.54.27-.72.6-.18.36-.31.93-.2 1.87a.5.5 0 0 1-.99.12c-.13-1.06 0-1.86.31-2.45.32-.6.8-.93 1.28-1.08a.5.5 0 0 1 .32.94Z";
   
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