/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoBackgroundEffectHorizontal",
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

   var pathdregular = "M4 4a2 2 0 0 0-1.73 1h15.46A2 2 0 0 0 16 4H4ZM2 7h4.84c-.15.31-.25.65-.3 1H2V7Zm6 0a2.49 2.49 0 0 0 .5 3.5 2.49 2.49 0 0 0 3.8-1A2.5 2.5 0 0 0 10 6c-.82 0-1.54.4-2 1Zm2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM2 9.5h4.64c.11.36.28.7.49 1H2v-1ZM6.09 13c.2-.58.76-1 1.41-1h5a1.5 1.5 0 0 1 1.5 1.5V16h-1v-2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V16H6v-2.5c0-.18.03-.34.09-.5Zm8.41-1c.22.3.38.63.45 1H18v-1h-3.5Zm.5 3v1h1a2 2 0 0 0 1.73-1H15ZM5 16v-1H2.27c.34.6.99 1 1.73 1h1Zm.5-4c-.22.3-.38.63-.45 1H2v-1h3.5Zm7.86-2.5c-.11.36-.28.7-.49 1H18v-1h-4.64ZM18 8h-4.54a3.47 3.47 0 0 0-.3-1H18v1Z";
   var pathdfilled = "M4 4a2 2 0 0 0-1.73 1h15.46A2 2 0 0 0 16 4H4ZM2 7h4.84c-.15.31-.25.65-.3 1H2V7Zm6 0a2.49 2.49 0 0 0 .5 3.5 2.49 2.49 0 0 0 3.8-1A2.5 2.5 0 0 0 10 6c-.82 0-1.54.4-2 1ZM2 9.5h4.64c.11.36.28.7.49 1H2v-1ZM6.09 13c.2-.58.76-1 1.41-1h5a1.5 1.5 0 0 1 1.5 1.5V16H6v-2.5c0-.18.03-.34.09-.5Zm8.41-1c.22.3.38.63.45 1H18v-1h-3.5Zm.5 3v1h1a2 2 0 0 0 1.73-1H15ZM5 16v-1H2.27c.34.6.99 1 1.73 1h1Zm.5-4c-.22.3-.38.63-.45 1H2v-1h3.5Zm7.86-2.5c-.11.36-.28.7-.49 1H18v-1h-4.64ZM18 8h-4.54a3.47 3.47 0 0 0-.3-1H18v1Z";
   
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