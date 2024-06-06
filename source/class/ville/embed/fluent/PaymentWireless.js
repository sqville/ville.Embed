/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaymentWireless",
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

   var pathdregular = "M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.64 4.14a.51.51 0 0 0-.71 0c-.2.2-.2.51 0 .7a4.4 4.4 0 0 1 0 6.32c-.2.2-.2.5 0 .7.2.2.52.2.71 0a5.37 5.37 0 0 0 0-7.72Zm-3.22 1c.2-.19.51-.19.7 0a4.1 4.1 0 0 1 0 5.71c-.19.2-.5.2-.7 0a.51.51 0 0 1 0-.72 3.07 3.07 0 0 0 0-4.27.51.51 0 0 1 0-.71Zm5.74-2a.53.53 0 0 0-.73 0c-.2.2-.2.5 0 .7a5.68 5.68 0 0 1 0 8.33c-.2.19-.2.5 0 .69.2.19.53.19.73 0a6.62 6.62 0 0 0 0-9.72Z";
   var pathdfilled = "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm7.36-3.86a.51.51 0 0 0-.71 0c-.2.2-.2.51 0 .7a4.4 4.4 0 0 1 0 6.32c-.2.2-.2.5 0 .7.2.2.52.2.71 0a5.37 5.37 0 0 0 0-7.72Zm-3.22 1c-.19.2-.19.53 0 .72a3.07 3.07 0 0 1 0 4.27c-.19.2-.19.52 0 .72.2.2.51.2.7 0a4.1 4.1 0 0 0 0-5.7c-.19-.2-.5-.2-.7 0Zm5.74-2a.53.53 0 0 0-.73 0c-.2.2-.2.5 0 .7a5.68 5.68 0 0 1 0 8.33c-.2.19-.2.5 0 .69.2.19.53.19.73 0a6.62 6.62 0 0 0 0-9.72Z";
   
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