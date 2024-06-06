/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSyncDismiss",
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

   var pathdregular = "M11.41 2.93c.2.2.2.51 0 .7l-.01.02a6.48 6.48 0 0 0-6 1.75 6.5 6.5 0 0 0 .7 9.8.5.5 0 1 1-.6.8A7.5 7.5 0 0 1 9.59 2.5l-1-.99a.5.5 0 0 1 .71-.7l2.12 2.12Zm-2.8 13.42-.02.01a.5.5 0 0 0 0 .71l2.12 2.12a.5.5 0 0 0 .7-.7l-1-1a7.5 7.5 0 0 0 4.07-13.5.5.5 0 1 0-.59.8 6.5 6.5 0 0 1-5.3 11.55Zm3.24-8.2c.2.2.2.5 0 .7L10.71 10l1.14 1.15a.5.5 0 0 1-.7.7L10 10.71l-1.15 1.14a.5.5 0 0 1-.7-.7L9.29 10 8.15 8.85a.5.5 0 1 1 .7-.7L10 9.29l1.15-1.14c.2-.2.5-.2.7 0ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z";
   var pathdfilled = "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8 6.5 6.5 0 0 1 5.28-11.55l.02-.02ZM8.6 16.36l.02-.02a6.48 6.48 0 0 0 5.99-1.74 6.5 6.5 0 0 0-.7-9.8.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l.98.98a.5.5 0 1 1-.7.71l-2.12-2.12a.5.5 0 0 1 0-.7ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-3.15-1.15a.5.5 0 0 0-.7-.7L10 9.29 8.85 8.15a.5.5 0 0 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 1 0 .7.7L10 10.71l1.15 1.14a.5.5 0 0 0 .7-.7L10.71 10l1.14-1.15Z";
   
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