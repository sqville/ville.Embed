/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherSunnyLow",
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

   var pathdregular = "M5.55 10.02c0 .33.04.66.11.98H2.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.1a4.5 4.5 0 0 0-4.36-5.47c-2.48 0-4.49 2.01-4.49 4.49Zm7.83.98H6.7a3.48 3.48 0 1 1 6.68 0Zm-3.35 7.01a.5.5 0 0 0 .1-.01h-.21a.5.5 0 0 0 .1.01ZM5 4.32l.07.06.85.86A.5.5 0 0 1 5.3 6l-.07-.05-.86-.86A.5.5 0 0 1 5 4.32Zm10.67.06c.17.18.2.44.06.64l-.06.07-.86.86a.5.5 0 0 1-.76-.64l.06-.07.85-.86c.2-.2.52-.2.71 0Zm-5.65-2.36a.5.5 0 0 1 .49.41v1.3a.5.5 0 0 1-.98.1l-.01-.1v-1.2c0-.28.22-.5.5-.5ZM8.5 16a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5 14c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 14Z";
   var pathdfilled = "M5.66 11a4.5 4.5 0 0 1 4.38-5.47A4.48 4.48 0 0 1 14.4 11h3.09a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h3.16Zm4.47 7a.5.5 0 0 1-.21 0h.21ZM5.08 4.38 5 4.32a.5.5 0 0 0-.64.77l.86.86.07.05a.5.5 0 0 0 .63-.76l-.85-.86Zm10.66.64a.5.5 0 0 0-.77-.64l-.85.86-.06.07a.5.5 0 0 0 .76.64l.86-.86.06-.07Zm-5.22-2.59a.5.5 0 0 0-1 .1v1.2l.02.1a.5.5 0 0 0 .99-.1v-1.2l-.01-.1ZM8.5 16a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5 14c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 14Z";
   
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