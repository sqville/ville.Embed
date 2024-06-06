/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PresenterOff",
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

   var pathdregular = "M7 8.5c0-.23.05-.45.15-.65l-5-5a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.71-3.7-.29.27a.5.5 0 0 0-.15.36v1.72c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 16.5v-1.72a.5.5 0 0 0-.15-.36l-3.7-3.56a.5.5 0 0 1 .34-.86h5.8l-1-1H7v-.5Zm3.3 2.5H4.72l2.81 2.7c.3.29.46.68.46 1.08v1.72c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-1.72c0-.4.17-.8.46-1.08l.27-.26L10.3 11ZM12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.88 4h1.38c.28 0 .5.22.5.5V9h1v-.5c0-.83-.67-1.5-1.5-1.5H9.12l1 1Zm4.76 4.76-.7-.7L15.26 11h-2.15l-1-1h4.39a.5.5 0 0 1 .35.86l-1.98 1.9Z";
   var pathdfilled = "M7.15 7.85c-.1.2-.15.42-.15.65V9h1.3l1 1H3.5a.5.5 0 0 0-.36.86l3.7 3.56c.1.1.16.23.16.36v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 0 1 .15-.36l.29-.27 3.7 3.7a.5.5 0 0 0 .71-.7l-10-10-5-5a.5.5 0 1 0-.7.7l5 5Zm9.7 3.01-1.97 1.9L12.12 10h4.39a.5.5 0 0 1 .35.86ZM13 9h-1.88l-2-2h2.38c.83 0 1.5.67 1.5 1.5V9Zm-3-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z";
   
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