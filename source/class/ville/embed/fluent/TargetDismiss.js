/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TargetDismiss",
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

   var pathdregular = "M3 10a7 7 0 0 0 6.6 6.99c.18.36.4.7.65 1L10 18a8 8 0 1 1 8-7.75 5.5 5.5 0 0 0-1.01-.66A7 7 0 0 0 3 10Zm6.03 3.88a4 4 0 1 1 4.85-4.85 5.56 5.56 0 0 1 1.02-.02 5 5 0 1 0-5.89 5.9 5.58 5.58 0 0 1 .02-1.03Zm.86-2.38c.42-.64.97-1.19 1.6-1.6a1.5 1.5 0 1 0-1.6 1.6ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0Z";
   var pathdfilled = "M3.5 10a6.5 6.5 0 0 0 5.86 6.47c.22.55.52 1.07.9 1.52H10a8 8 0 1 1 7.99-7.74 5.5 5.5 0 0 0-1.53-.89A6.5 6.5 0 0 0 3.5 10Zm5.61 3.39a3.5 3.5 0 1 1 4.27-4.28 5.52 5.52 0 0 1 1.52-.1 5 5 0 1 0-5.89 5.9 5.58 5.58 0 0 1 .1-1.52Zm2.38-3.5c-.63.42-1.18.97-1.6 1.6a1.5 1.5 0 1 1 1.6-1.6ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z";
   
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