/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Guitar",
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

   var pathdregular = "M9.7 11.7a1 1 0 1 1-1.4-1.4 1 1 0 0 1 1.4 1.4Zm5.56-9.39a1.09 1.09 0 0 1 1.53 0l.9.9c.42.42.42 1.1 0 1.53l-4.37 4.38a2.13 2.13 0 0 1-.76 3.16l-.68.34a.6.6 0 0 0-.32.66v.06a3.72 3.72 0 0 1-1.4 3.7 4.8 4.8 0 0 1-6.27-.44l-.49-.5a4.8 4.8 0 0 1-.44-6.25 3.72 3.72 0 0 1 3.7-1.42l.06.01a.6.6 0 0 0 .66-.32l.34-.68a2.13 2.13 0 0 1 3.16-.76l4.38-4.37Zm.83.7a.09.09 0 0 0-.13 0L14.8 4.19l1.02 1.02 1.16-1.16a.09.09 0 0 0 0-.13l-.9-.9Zm-.98 2.9-1.02-1.02-2.84 2.84a.5.5 0 0 1-.7 0l-.13-.13a1.13 1.13 0 0 0-1.8.3l-.35.67a1.6 1.6 0 0 1-1.75.85h-.05c-1.03-.21-2.08.19-2.71 1.03a3.8 3.8 0 0 0 .35 4.95l.49.49a3.8 3.8 0 0 0 4.95.35 2.72 2.72 0 0 0 1.04-2.7l-.02-.07c-.14-.7.21-1.42.86-1.75l.68-.33c.69-.35.83-1.26.3-1.8l-.14-.14a.5.5 0 0 1 0-.7l2.84-2.84Z";
   var pathdfilled = "m14.5 3.78 1.11-1.12c.23-.23.6-.23.83 0l.9.9c.22.23.22.6 0 .83L16.22 5.5l-1.73-1.73Zm-.72.71-2.53 2.53-.13-.13a2.13 2.13 0 0 0-3.4.55l-.34.68a.6.6 0 0 1-.66.32h-.06a3.72 3.72 0 0 0-3.7 1.4 4.8 4.8 0 0 0 .44 6.27l.49.49a4.8 4.8 0 0 0 6.26.44 3.72 3.72 0 0 0 1.42-3.7l-.01-.06a.6.6 0 0 1 .32-.66l.68-.34a2.13 2.13 0 0 0 .55-3.4l-.13-.13 2.53-2.53-1.73-1.73Zm-5.41 7.14a1.25 1.25 0 1 1 1.76-1.76 1.25 1.25 0 0 1-1.76 1.76Z";
   
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