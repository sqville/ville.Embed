/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WifiLock",
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

   var pathdregular = "M16.83 7.38c.41.41.8.88 1.13 1.37a.5.5 0 0 1-.82.57 8.61 8.61 0 0 0-14.2 0 .5.5 0 1 1-.82-.58 9.61 9.61 0 0 1 14.71-1.36ZM14.6 9.36c.47.47.88 1.04 1.19 1.65a.5.5 0 0 1-.9.46 5.45 5.45 0 0 0-7.18-2.49c-.24-.27-.54-.5-.87-.67a6.45 6.45 0 0 1 7.76 1.05Zm-6.1 1.7a2 2 0 0 1 1.03.65 3.03 3.03 0 0 1 3.29 1.8.5.5 0 0 0 .92-.4 4.03 4.03 0 0 0-5.24-2.13v.08Zm1.5 2.35V16a1.3 1.3 0 0 0 .96-2.22 1.3 1.3 0 0 0-.96-.38ZM3.5 11v1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 0 0-4 0Zm1 1v-1a1 1 0 0 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z";
   var pathdfilled = "M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 0 1-1.23.85A7.97 7.97 0 0 0 5.06 8.03a3 3 0 0 0-2.4 2.02.75.75 0 0 1-.42-1.15 9.47 9.47 0 0 1 14.5-1.34Zm-5.8 8.08c-.26.25-.6.37-.93.36v-2.48a1.24 1.24 0 0 1 .92 2.12Zm.96-2.74a2.63 2.63 0 0 0-2.08-.76 2 2 0 0 0-1.31-1.08v-.13a4.13 4.13 0 0 1 5.32 2.2.75.75 0 0 1-1.37.6c-.13-.31-.33-.6-.56-.83Zm1.64-2.39a4.94 4.94 0 0 0-5.45-1.04 3.01 3.01 0 0 0-1.15-1.1 6.45 6.45 0 0 1 8.85 2.73.75.75 0 1 1-1.33.69 5.13 5.13 0 0 0-.92-1.28ZM3.5 11v1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z";
   
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